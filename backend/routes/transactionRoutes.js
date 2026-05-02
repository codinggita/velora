const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');
const { protect } = require('../middlewares/authMiddleware');

router.post('/', protect, transactionController.addTransaction);
router.get('/', protect, transactionController.getTransactions);

module.exports = router;
