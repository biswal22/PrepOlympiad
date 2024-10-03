import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom to create clickable links

const Subjects = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full max-w-6xl">
                {/* Mathematics Box */}
                <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
                    <Link to="/mathematics">
                        <h2 className="text-3xl font-semibold text-blue-600 hover:underline">
                            Mathematics
                        </h2>
                    </Link>
                    <p className="mt-4 text-gray-700">Mathcounts, AMC 10/12, AIME</p>
                </div>

                {/* Chemistry Box */}
                <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
                    <Link to="/chemistry">
                        <h2 className="text-3xl font-semibold text-blue-600 hover:underline">
                            Chemistry
                        </h2>
                    </Link>
                    <p className="mt-4 text-gray-700">USNCO Local and National Exams</p>
                </div>

                {/* Physics Box */}
                <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
                    <Link to="/physics">
                        <h2 className="text-3xl font-semibold text-blue-600 hover:underline">
                            Physics
                        </h2>
                    </Link>
                    <p className="mt-4 text-gray-700">F=MA and USAPHO</p>
                </div>

                {/* Biology Box */}
                <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
                    <Link to="/biology">
                        <h2 className="text-3xl font-semibold text-blue-600 hover:underline">
                            Biology
                        </h2>
                    </Link>
                    <p className="mt-4 text-gray-700">USABO Open and National Exams</p>
                </div>

                {/* Earth Science Box */}
                <div className="bg-gray-100 shadow-lg p-6 rounded-lg">
                    <Link to="/earthscience">
                        <h2 className="text-3xl font-semibold text-blue-600 hover:underline">
                            Earth Science
                        </h2>
                    </Link>
                    <p className="mt-4 text-gray-700">Open exams</p>
                </div>
            </div>
        </div>
    );
};

export default Subjects;