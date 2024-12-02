import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import logo from '../../logo-removebg-preview.png';

import { FaSquareRootAlt, FaFlask, FaAtom, FaLeaf, FaGlobeAmericas, FaLaptop } from 'react-icons/fa';
 // Import icons for different subjects
 import { FaQuestionCircle, FaCheckCircle, FaHourglass, FaBook } from 'react-icons/fa';
import './HomePage.css'; // Import custom CSS for animations

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from('.content-section', {
            scrollTrigger: {
                trigger: '.content-section',
                start: 'top 75%', // Adjust the start point as needed
                end: 'bottom 25%', // Adjust the end point as needed
                toggleActions: 'play none none none'
            },
            y: 100,
            opacity: 0,
            duration: 1
        });
    }, []);

    return (
        <div className="min-h-screen pt-32">
            <div className="container mx-auto px-4 py-8">
                {/* Flexbox container for two-column layout */}
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between">
                    
                    {/* Left Side: Text Content */}
                    <div className="lg:w-1/2 text-left">
                        <h1 className="text-6xl lg:text-8xl font-bold text-white">PEAKM!NDS</h1>
                        <p className="mt-14 lg:text-5xl font-bold text-white mb-4">
                            Your center for preparing for any and all STEM Olympiads!
                        </p>
                    </div>

                    {/* Right Side: Icons and Image */}
                    <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center relative">
                        {/* Wrapper for animated subject icons */}
                        <img 
                            src={logo} 
                            alt="STEM Illustration" 
                            className="mt-8 w-[25rem] h-[25rem] object-contain"
                        />
                        <div className="icon-container absolute">
                            <FaSquareRootAlt className="icon math-icon" />
                            <FaFlask className="icon chemistry-icon" />
                            <FaAtom className="icon physics-icon" />
                            <FaLeaf className="icon biology-icon" />
                            <FaGlobeAmericas className="icon earth-science-icon" />
                            <FaLaptop className="icon computer-icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-32"></div> {/* Add extra margin space above */}
            <div className="bg-green-800 py-8 w-full">
                <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center px-4">
                    {/* Questions Available */}
                    <div>
                        <FaQuestionCircle className="text-4xl mx-auto mb-2" />
                        <p className="text-3xl font-bold">XXX</p>
                        <p className="text-lg">Questions Available</p>
                    </div>

                    {/* Answers Submitted */}
                    <div>
                        <FaCheckCircle className="text-4xl mx-auto mb-2" />
                        <p className="text-3xl font-bold">XXX</p>
                        <p className="text-lg">Answers Submitted</p>
                    </div>

                    {/* Hours Studied */}
                    <div>
                        <FaHourglass className="text-4xl mx-auto mb-2" />
                        <p className="text-3xl font-bold">XXX</p>
                        <p className="text-lg">Hours Studied</p>
                    </div>

                    {/* Supported Courses */}
                    <div>
                        <FaBook className="text-4xl mx-auto mb-2" />
                        <p className="text-3xl font-bold">5</p>
                        <p className="text-lg">Supported Olympiads</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;