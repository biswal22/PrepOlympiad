import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom to create clickable links

const Subjects = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8">
            {/* Page Title */}
            <h1 className="text-6xl font-bold text-center text-white mb-8">
                All Subjects
            </h1>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full max-w-6xl">
                {/* Mathematics Box */}
                <Link to="/mathematics" className="bg-purple-700 shadow-lg p-6 rounded-lg hover:bg-purple-900 transition duration-300">
                    <h2 className="text-3xl font-semibold text-white">
                        Mathematics
                    </h2>
                    <p className="mt-4 text-white">Mathcounts, AMC 10/12, AIME</p>
                </Link>

                {/* Chemistry Box */}
                <Link to="/chemistry" className="bg-purple-700 shadow-lg p-6 rounded-lg hover:bg-purple-900 transition duration-300">
                    <h2 className="text-3xl font-semibold text-white">
                        Chemistry
                    </h2>
                    <p className="mt-4 text-white">USNCO Local and National Exams</p>
                </Link>

                {/* Physics Box */}
                <Link to="/physics" className="bg-purple-700 shadow-lg p-6 rounded-lg hover:bg-purple-900 transition duration-300">
                    <h2 className="text-3xl font-semibold text-white">
                        Physics
                    </h2>
                    <p className="mt-4 text-white">F=MA and USAPHO</p>
                </Link>

                {/* Biology Box */}
                <Link to="/biology" className="bg-purple-700 shadow-lg p-6 rounded-lg hover:bg-purple-900 transition duration-300">
                    <h2 className="text-3xl font-semibold text-white">
                        Biology
                    </h2>
                    <p className="mt-4 text-white">USABO Open and National Exams</p>
                </Link>

                {/* Earth Science Box */}
                <Link to="/earthscience" className="bg-purple-700 shadow-lg p-6 rounded-lg hover:bg-purple-900 transition duration-300">
                    <h2 className="text-3xl font-semibold text-white">
                        Earth Science
                    </h2>
                    <p className="mt-4 text-white">Open exams</p>
                </Link>
            </div>
        </div>
    );
};

export default Subjects;