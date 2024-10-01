import React from 'react';

const About = () => {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4 py-8">
            {/* Big Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-center mb-8">
                Best Place for Managing Your Progress to All Olympiads
            </h1>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* First Row */}
                <div>
                    <h2 className="text-2xl font-semibold">Mathematics</h2>
                    <p className="mt-2 text-gray-700">Mathcounts, AMC 10/12, AIME</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">Chemistry</h2>
                    <p className="mt-2 text-gray-700">USNCO Local and National Exams</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">Physics</h2>
                    <p className="mt-2 text-gray-700">F=MA and USAPHO</p>
                </div>

                {/* Second Row */}
                <div>
                    <h2 className="text-2xl font-semibold">Biology</h2>
                    <p className="mt-2 text-gray-700">USABO Open and National Exams</p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">Earth Science</h2>
                    <p className="mt-2 text-gray-700">Open exams</p>
                </div>
            </div>
        </div>
    );
};

export default About;