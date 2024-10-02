import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Correctly imported icon

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex justify-center items-center space-x-8">
                {/* Website Name */}
                <p className="text-xl lg:text-2xl font-semibold">PrepOlympiad</p>

                {/* Contact Us Link */}
                <a
                    href="mailto:contact@prepolympiad.com"
                    className="text-white underline font-semibold hover:text-blue-600 transition-colors duration-300 text-xl lg:text-2xl"
                >
                    Contact Us
                </a>

                {/* LinkedIn Icon Link */}
                <a
                    href="https://www.linkedin.com/in/aniket-biswal-aa170b250"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-600 transition-colors duration-300"
                >
                    <FaLinkedin size={30} /> {/* Increased size by 1.25x */}
                </a>
            </div>
        </footer>
    );
};

export default Footer;