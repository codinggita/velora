const { OAuth2Client } = require('google-auth-library');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

/**
 * Helper: Create a JWT token for a user
 */
const createToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_SECRET || 'secret_key_123',
        { expiresIn: '7d' }
    );
};

/**
 * 1. Signup with Email/Password
 */
exports.signup = async (req, res) => {
    try {
        const { fullName, email, password, mobile, familySize, agreed } = req.body;

        // Validate required fields
        if (!fullName || !email || !password) {
            return res.status(400).json({ message: 'Full name, email, and password are required' });
        }

        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'An account with this email already exists. Please login instead.' });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        user = await User.create({
            fullName,
            email,
            password: hashedPassword,
            mobile,
            familySize,
            agreed: agreed || false
        });

        // Create JWT
        const token = createToken(user);

        res.status(201).json({
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Signup Error:', error);
        res.status(500).json({ message: 'Server error during signup. Please try again.' });
    }
};

/**
 * 2. Login with Email/Password
 *    - User MUST have signed up first
 */
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        }

        // Find user
        const user = await User.findOne({ email });

        // User does not exist at all
        if (!user) {
            return res.status(404).json({ 
                message: 'No account found with this email. Please sign up first to create an account.',
                code: 'USER_NOT_FOUND'
            });
        }

        // User signed up via Google only (no password set)
        if (!user.password) {
            return res.status(400).json({ 
                message: 'This account was created with Google. Please use Google login instead.',
                code: 'GOOGLE_ACCOUNT'
            });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ 
                message: 'Incorrect password. Please try again.',
                code: 'WRONG_PASSWORD'
            });
        }

        // Create JWT
        const token = createToken(user);

        res.status(200).json({
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        });
    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ message: 'Server error during login. Please try again.' });
    }
};

/**
 * 3. Google Signup
 *    - Creates a NEW account via Google. Rejects if account already exists.
 */
exports.googleSignup = async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: 'Google token is required' });
    }

    try {
        // Verify the Google Access Token by fetching user info
        const googleResponse = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`);
        
        if (!googleResponse.ok) {
            const errorData = await googleResponse.text();
            console.error('Google API Error:', errorData);
            return res.status(401).json({ message: 'Failed to verify Google token. Please try again.' });
        }

        const googleUser = await googleResponse.json();

        if (!googleUser.email) {
            return res.status(400).json({ message: 'Google account has no email associated.' });
        }

        const { sub, email, name, picture } = googleUser;

        // Check if user already exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ 
                message: 'An account with this Google email already exists. Please login instead.',
                code: 'ALREADY_EXISTS'
            });
        }

        // Create new user with Google
        user = await User.create({
            fullName: name || 'Google User',
            email: email,
            googleId: sub,
            agreed: true
        });

        // Create a JWT for the user session
        const jwtToken = createToken(user);

        res.status(201).json({
            token: jwtToken,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                picture: picture
            }
        });

    } catch (error) {
        console.error('Google Signup Error:', error);
        res.status(500).json({ message: 'Internal server error during Google signup.' });
    }
};

/**
 * 4. Google Login
 *    - User MUST have signed up with Google first
 */
exports.googleLogin = async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: 'Google token is required' });
    }

    try {
        // Verify the Google Access Token by fetching user info
        const googleResponse = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${token}`);
        
        if (!googleResponse.ok) {
            const errorData = await googleResponse.text();
            console.error('Google API Error:', errorData);
            return res.status(401).json({ message: 'Failed to verify Google token. Please try again.' });
        }

        const googleUser = await googleResponse.json();

        if (!googleUser.email) {
            return res.status(400).json({ message: 'Google account has no email associated.' });
        }

        const { sub, email, name, picture } = googleUser;

        // Check if user exists
        let user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ 
                message: 'No account found with this Google email. Please sign up first to create an account.',
                code: 'USER_NOT_FOUND'
            });
        }

        // If user exists but signed up with email/password (no googleId), link the Google account
        if (!user.googleId) {
            user.googleId = sub;
            await user.save();
        }

        // Create a JWT for the user session
        const jwtToken = createToken(user);

        res.status(200).json({
            token: jwtToken,
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email,
                picture: picture
            }
        });

    } catch (error) {
        console.error('Google Login Error:', error);
        res.status(500).json({ message: 'Internal server error during Google login.' });
    }
};
