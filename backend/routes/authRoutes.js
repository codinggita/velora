const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// @route   POST /api/auth/signup
// @desc    Register a new user with email/password
router.post('/signup', authController.signup);

// @route   POST /api/auth/login
// @desc    Login with email/password (must have signed up first)
router.post('/login', authController.login);

// @route   POST /api/auth/google/signup
// @desc    Register a new user via Google OAuth
router.post('/google/signup', authController.googleSignup);

// @route   POST /api/auth/google/login
// @desc    Login via Google OAuth (must have signed up first)
router.post('/google/login', authController.googleLogin);

module.exports = router;
