import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { FaSquareRootAlt, FaFlask, FaAtom, FaLeaf, FaGlobeAmericas } from 'react-icons/fa'; // Import icons for different subjects
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
                        <h1 className="text-6xl lg:text-8xl font-bold text-white">PrepOlympiad</h1>
                        <p className="mt-14 lg:text-5xl font-bold text-white mb-4">
                            Your center for preparing for any and all STEM Olympiads!
                        </p>
                    </div>

                    {/* Right Side: GIF/Video */}
                    <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
                        {/* Wrapper for animated subject icons */}
                        <div className="icon-container">
                            <FaSquareRootAlt className="icon math-icon" />
                            <FaFlask className="icon chemistry-icon" />
                            <FaAtom className="icon physics-icon" />
                            <FaLeaf className="icon biology-icon" />
                            <FaGlobeAmericas className="icon earth-science-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;