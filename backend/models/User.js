const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: String, // User's Auth0 ID
    statistics: {
        examsTaken: Number,
        correctAnswers: Number,
        wrongAnswers: Number,
        subjectStats: {
            chemistry: {
                examsTaken: Number,
                correctAnswers: Number,
                wrongAnswers: Number
            },
            mathematics: {
                examsTaken: Number,
                correctAnswers: Number,
                wrongAnswers: Number
            },
            physics: {
              examsTaken: Number,
              correctAnswers: Number,
              wrongAnswers: Number
            },
            biology: {
              examsTaken: Number,
              correctAnswers: Number,
              wrongAnswers: Number
            },
            earth_science: {
              examsTaken: Number,
              correctAnswers: Number,
              wrongAnswers: Number
            }
            // Add more subjects as needed
        }
    }
});

module.exports = mongoose.model('User', userSchema);