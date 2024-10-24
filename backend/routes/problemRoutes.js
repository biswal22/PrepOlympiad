const express = require('express');
const router = express.Router();
const Problem = require('../models/Problem');

// Fetch random problems based on the subject
router.get('/:subject/random', async (req, res) => {
    const { subject } = req.params;
    try {
        const problems = await Problem.findOne({ subject });
        if (!problems) return res.status(404).json({ error: "No problems found" });

        // Shuffle and return a random set of problems (for example, 5 problems)
        const randomProblems = problems.questions.sort(() => 0.5 - Math.random()).slice(0, 5);
        res.json(randomProblems);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;