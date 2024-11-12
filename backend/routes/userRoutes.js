const express = require('express');
const router = express.Router();
const { updateUserStats } = require('../controllers/userController');

router.post('/update-stats', updateUserStats);

module.exports = router;