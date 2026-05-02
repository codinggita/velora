const User = require('../models/user');

// Get current user profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Get Profile Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
