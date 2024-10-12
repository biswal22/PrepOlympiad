import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Physics = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulating login state

    return (
        <div className="min-h-screen flex">
            {/* Left column: User Stats or Login Prompt */}
            <div className="w-1/4 bg-transparent p-6 pt-16"> {/* Added pt-32 to push the left column below the navbar */}
                {isLoggedIn ? (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Your Physics Stats</h2>
                        <ul>
                            <li>Exams Taken: 5</li>
                            <li>Average Score: 85%</li>
                            <li>Highest Score: 95%</li>
                            <li>Last Exam: 80%</li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <div className="bg-purple-300 w-full h-full flex flex-col items-center justify-center text-center p-6">
                            <p className="text-lg font-bold mb-4">Log in to view your statistics</p>
                            <button
                                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                                onClick={() => alert('Redirect to login page')}
                            >
                                Log In
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Main content: Exam options */}
            <div className="w-3/4 p-8 pt-48"> {/* Keeping pt-32 to match the shift of main content down */}
                <h1 className="text-7xl font-bold mb-8">Physics</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {/* Box 1: Take a Timed Exam */}
                    <Link
                        to={{
                            pathname: '/timed-exam',
                        }}
                        state={{ from: '/physics' }} // Passing the current page as state
                        className="bg-blue-100 p-6 rounded-lg shadow-lg hover:bg-blue-200 transition"
                    >
                        <h2 className="text-2xl font-bold mb-4">Take a Timed Exam</h2>
                        <p>Prepare for the real testing experience with a timed exam.</p>
                    </Link>

                    {/* Box 2: Practice Random Problems */}
                    <Link
                        to={{
                            pathname: '/random-problems',
                        }}
                        state={{ from: '/physics' }} // Passing the current page as state
                        className="bg-green-100 p-6 rounded-lg shadow-lg hover:bg-green-200 transition"
                    >
                        <h2 className="text-2xl font-bold mb-4">Practice Random Problems</h2>
                        <p>Sharpen your skills by solving random problems.</p>
                    </Link>

                    {/* Box 3: Download Exam */}
                    <a
                        href="https://www.aapt.org/Common2022/pastexams.cfm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-yellow-100 p-6 rounded-lg shadow-lg hover:bg-yellow-200 transition"
                    >
                        <h2 className="text-2xl font-bold mb-4">Download Exam</h2>
                        <p>Download previous physics exams for offline practice.</p>
                    </a>

                    {/* Box 4: Resources */}
                    <Link
                        to={{
                            pathname: '/resources',
                        }}
                        state={{ from: '/physics' }} // Passing the current page as state
                        className="bg-red-100 p-6 rounded-lg shadow-lg hover:bg-red-200 transition"
                    >
                        <h2 className="text-2xl font-bold mb-4">Resources</h2>
                        <p>Find additional materials to help you ace your physics exam.</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Physics;