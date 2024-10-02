import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import arcLogo from '../assets/arcicon.png';
// import hoverLogo from '../assets/hoverlogo.png'; // Import the new logo

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            setIsScrolled(offset > 0);
        };
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav className={`bg-transparent backdrop-blur-lg fixed w-full h-16 transition-shadow duration-300 ease-in-out ${isScrolled ? `${isMobileMenuOpen ? '' : 'shadow-lg'} bg-opacity-90` : 'bg-opacity-100'} z-50`}>
                <div className="px-6 py-3 flex items-center">
                    <Link to="/"
                          className="logo flex items-center space-x-5"
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}>
                        {/* <img src={isHovered ? hoverLogo : arcLogo} alt="Brand Logo" className={`my-4 transition-all duration-300 ease-in-out h-16 w-25`}/> */}

                    </Link>
                    <div className="flex-grow"></div>
                    <div className="hidden sm:visible sm:flex items-center space-x-1">
                        <Link to="/" className="text-white font-bold hover:text-blue-600 transition duration-300 ease-in-out px-5 py-3 rounded border border-transparent hover:border-blue-300">Home</Link>
                        <Link to="/about" className="text-white font-bold hover:text-blue-600 transition duration-300 ease-in-out px-5 py-3 rounded border border-transparent hover:border-blue-300 text-nowrap">About Us</Link>
                        <Link to="/subjects" className="text-white font-bold hover:text-blue-600 transition duration-300 ease-in-out px-5 py-3 rounded border border-transparent hover:border-blue-300">Subjects</Link>
                        {/*  <Link to="/team" className="text-white hover:text-blue-600 transition duration-300 ease-in-out px-5 py-3 rounded border border-transparent hover:border-gray-300">Team</Link> */}
                        {/* <a href="https://wikipage.purduearc.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition duration-300 ease-in-out px-5 py-3 rounded border border-transparent hover:border-gray-300">Wiki</a>
                        <a href="mailto:prepolympiad@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition duration-300 ease-in-out px-5 py-3 rounded border border-transparent hover:border-gray-300">Contact Us</a> */}
                    </div>
                    {isMobile && (
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white hover:text-white focus:outline-none focus:text-white">
                            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current transition-transform duration-300" style={{transform: isMobileMenuOpen ? 'rotate(-90deg)' : 'rotate(0deg)'}}>
                                <path d="M4 5h16a1 1 0 000-2H4a1 1 0 000 2zm0 6h16a1 1 0 000-2H4a1 1 0 000 2zm0 6h16a1 1 0 000-2H4a1 1 0 000 2z"></path>
                            </svg>
                        </button>
                    )}
                </div>
                {isMobileMenuOpen && (
                    <div
                        className={`sm:hidden bg-white shadow-lg absolute w-full ${isScrolled ? 'shadow-lg bg-opacity-90' : 'bg-opacity-100'}`}>
                        <Link to="/" className="block text-white font-bold hover:text-blue-600 px-6 py-3 rounded border border-transparent hover:border-blue-300">Home</Link>
                        <Link to="/about" className="block text-white font-bold hover:text-blue-600 px-6 py-3 rounded border border-transparent hover:border-blue-300">About Us</Link>
                        <Link to="/subjects" className="block text-white font-bold hover:text-blue-600 px-6 py-3 rounded border border-transparent hover:border-blue-300">Subjects</Link>
                        {/*  <Link to="/team" className="block text-white hover:text-blue-600 px-6 py-3 rounded border border-transparent hover:border-gray-300">Team</Link> 
                        <a href="https://wikipage.purduearc.com/" target="_blank" rel="noopener noreferrer" className="block text-white hover:text-blue-600 px-6 py-3 rounded border border-transparent hover:border-gray-300">Wiki</a> */}
                    </div>
                )}
            </nav>
            {/* <div className="bg-white">
                <div className="mx-auto px-6 py-3 flex justify-between items-center">
                    <img src={arcLogo} alt="Brand Logo" className={`my-4 transition-all duration-300 ease-in-out ${isScrolled ? 'h-10 w-10' : 'h-16 w-16'} opacity-0`}/>
                </div>
                      </div> */}
        </>
    );
};

export default Navbar;