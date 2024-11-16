import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const RandomProblems = () => {
    const location = useLocation();
    const previousPage = location.state?.from || 'Unknown';
    const [problems, setProblems] = useState([]); // Store fetched problems
    const [currentProblemIndex, setCurrentProblemIndex] = useState(0); // Track current problem index
    const [selectedAnswer, setSelectedAnswer] = useState(''); // Track selected answer
    const [feedback, setFeedback] = useState(''); // Track feedback for the user

    useEffect(() => {
        // Fetch problems based on the subject (previousPage)
        const fetchProblems = async () => {
            try {
                const response = await axios.get(`http://localhost:5173/api/problems/${previousPage}/random`);
                setProblems(response.data); // Assuming API returns an array of problems
            } catch (error) {
                console.error("Error fetching problems:", error);
            }
        };

        fetchProblems();
    }, [previousPage]);

    // Function to handle answer selection
    const handleAnswerSelect = (option) => {
        setSelectedAnswer(option);
    };

    // Function to handle submitting an answer
    const handleSubmit = async () => {
        const currentProblem = problems[currentProblemIndex];
        const isCorrect = currentProblem.correctAnswer === selectedAnswer;

        // Provide feedback to the user
        setFeedback(isCorrect ? 'Correct!' : 'Incorrect');

        // Update user statistics in the database
        try {
            await axios.post('http://localhost:5173/api/user/update-stats', {
                userId: 'auth0-user-id', // Replace with actual user ID from authentication
                subject: previousPage,
                correct: isCorrect
            });
        } catch (error) {
            console.error("Error updating stats:", error);
        }

        // Move to the next problem or end the session if no more problems
        setSelectedAnswer('');
        setTimeout(() => {
            setFeedback('');
            if (currentProblemIndex + 1 < problems.length) {
                setCurrentProblemIndex(currentProblemIndex + 1);
            } else {
                alert("You've completed all problems!");
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8">
                Random Problems - {previousPage.charAt(0).toUpperCase() + previousPage.slice(1)}
            </h1>

            {problems.length > 0 ? (
                <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8">
                    <p className="text-lg font-semibold mb-4">{problems[currentProblemIndex].question}</p>
                    {problems[currentProblemIndex].diagram && (
                        <img
                            src={problems[currentProblemIndex].diagram}
                            alt="Problem Diagram"
                            className="mb-4"
                        />
                    )}
                    <div className="grid grid-cols-1 gap-4">
                        {problems[currentProblemIndex].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerSelect(option)}
                                className={`p-3 rounded-lg border ${
                                    selectedAnswer === option ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleSubmit}
                        className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                    >
                        Submit Answer
                    </button>
                    <p className="mt-4 text-lg font-semibold">{feedback}</p>
                </div>
            ) : (
                <p>Loading problems...</p>
            )}
        </div>
    );
};

export default RandomProblems;