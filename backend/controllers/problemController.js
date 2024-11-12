const Problem = require('../models/Problem');

const getRandomProblems = async (req, res) => {
    const { subject } = req.params;
    try {
        const problems = await Problem.findOne({ subject });
        if (!problems) return res.status(404).json({ error: "No problems found" });

        // Randomize and limit the result to, say, 5 questions
        const randomProblems = problems.questions.sort(() => 0.5 - Math.random()).slice(0, 5);
        res.json(randomProblems);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { getRandomProblems };