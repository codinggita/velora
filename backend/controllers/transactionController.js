const Transaction = require('../models/Transaction');

// @desc    Add a new transaction
// @route   POST /api/transactions
exports.addTransaction = async (req, res) => {
    try {
        const { title, amount, type, category, date } = req.body;

        if (!title || !amount || !type || !category) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const transaction = await Transaction.create({
            user: req.user.id,
            title,
            amount,
            type,
            category,
            date: date || new Date()
        });

        res.status(201).json(transaction);
    } catch (error) {
        console.error('Add Transaction Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

// @desc    Get all user transactions
// @route   GET /api/transactions
exports.getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({ user: req.user.id }).sort({ date: -1 });
        res.json(transactions);
    } catch (error) {
        console.error('Get Transactions Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
