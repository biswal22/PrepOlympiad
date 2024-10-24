const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    subject: String,
    questions: [
        {
            question: String,
            options: [String],
            correctAnswer: String,
            diagram: String // Optional: URL or base64 for diagrams
        }
    ]
});

module.exports = mongoose.model('Problem', problemSchema);