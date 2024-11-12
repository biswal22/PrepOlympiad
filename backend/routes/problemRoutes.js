const express = require('express');
const router = express.Router();
const { getRandomProblems } = require('../controllers/problemController');

router.get('/:subject/random', getRandomProblems);

module.exports = router;