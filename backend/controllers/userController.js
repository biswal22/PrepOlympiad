const User = require('../models/User');

const updateUserStats = async (req, res) => {
    const { userId, subject, correct } = req.body;

    try {
        let user = await User.findOne({ userId });
        if (!user) {
            user = new User({
                userId,
                statistics: {
                    examsTaken: 0,
                    correctAnswers: 0,
                    wrongAnswers: 0,
                    subjectStats: {
                        [subject]: {
                            examsTaken: 0,
                            correctAnswers: 0,
                            wrongAnswers: 0
                        }
                    }
                }
            });
        }

        // Update stats based on answer correctness
        user.statistics.examsTaken++;
        if (correct) {
            user.statistics.correctAnswers++;
            user.statistics.subjectStats[subject].correctAnswers++;
        } else {
            user.statistics.wrongAnswers++;
            user.statistics.subjectStats[subject].wrongAnswers++;
        }

        await user.save();
        res.json(user.statistics);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = { updateUserStats };