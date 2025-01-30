import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react"; // Import Auth0 hook


const RandomProblems = () => {
    const { user, isAuthenticated, loginWithRedirect } = useAuth0(); // Auth0 hooks
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
                const response = await axios.get(`http://localhost:5000/api/problems${previousPage}/random`);
                setProblems(response.data); // Assuming API returns an array of problems
            } catch (error) {
                console.error("Error fetching problems:", error);
            }
        };

        fetchProblems();
    }, [previousPage]);

    useEffect(() => {
        if (!isAuthenticated) {
            loginWithRedirect();
        }
    }, [isAuthenticated, loginWithRedirect]);

    // useEffect(() => {
    //     if (isAuthenticated) {
    //         // Mock data for testing
    //         const mockProblems = [
    //             {
    //                 question: "What is 2 + 2?",
    //                 options: ["2", "3", "4", "5"],
    //                 correctAnswer: "4",
    //                 diagram: null // Optional: Replace with an image URL if testing diagrams
    //             },
    //             {
    //                 question: "What is 10 * 10?",
    //                 options: ["10", "100", "1", "1000"],
    //                 correctAnswer: "100",
    //                 diagram: null
    //             },
    //             {
    //                 question: "What is the square root of 16?",
    //                 options: ["2", "3", "4", "5"],
    //                 correctAnswer: "4",
    //                 diagram: null
    //             }
    //         ];
        
    //         // Set the mock data as the problems array
    //         setProblems(mockProblems);
    //     }
    // }, [isAuthenticated]); // Fetch problems only if the user is authenticated

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
            await axios.post('http://localhost:5000/api/user/update-stats', {
                userId: user.sub, // Replace with actual user ID from authentication
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
            {isAuthenticated ? (
                <>
                    <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8">
                        Random Problems - {previousPage.charAt(0).toUpperCase() + previousPage.slice(1)}
                    </h1>

                    {problems.length > 0 ? (
                        <div className="w-full max-w-lg bg-transparent shadow-lg rounded-lg p-8">
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
                                            selectedAnswer === option ? 'border-blue-500 bg-gray-600' : 'border-gray-300'
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
                </>
            ) : (
                <p>Redirecting to login...</p>
            )}
        </div>
    );
};

export default RandomProblems;