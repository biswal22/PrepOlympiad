import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import RecentNewsSection from "./RecentNewsSection.jsx";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
/* import videoSrc from '../assets/arcDemo.mp4';
import Discord from "../assets/icons/icons8-discord-128.png"
import Instagram from "../assets/icons/icons8-instagram-128.png"
import Linkedin from "../assets/icons/icons8-linkedin-96.png" */

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
        <div className="bg-blue-800 min-h-screen pt-32">
            <div className="mx-auto px-4 py-2">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold text-white">PrepOlympiad</h1>
                        <p className="mt-4 text-lg text-white mb-4">
                            Your center for preparing for any and all STEM Olympiads!
                        </p>
      {/*
                        <div className="flex justify-center space-x-4 mt-4">
                            <a href="https://discord.com/invite/feyyGCA6QU" target="_blank" rel="noopener noreferrer" className="icon-container w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <img src={Discord} alt="Icon 1" className="w-8 h-8"/>
                            </a>
                            <a href="https://www.instagram.com/purdue.arc/" target="_blank" rel="noopener noreferrer" className="icon-container w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <img src={Instagram} alt="Icon 2" className="w-8 h-8"/>
                            </a>
                            <a href="https://www.linkedin.com/company/purdue-arc/mycompany/" target="_blank" rel="noopener noreferrer" className="icon-container w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <img src={Linkedin} alt="Icon 3" className="w-8 h-8"/>
                            </a>
                        </div>
    */}

                        <br>
                        </br>

      {/*
                        <div className="max-w-5xl lg:max-w-6xl mb-8">
                            <video autoPlay loop muted className="w-full h-auto object-cover rounded-lg shadow-xl">
                                <source src={videoSrc} type="video/mp4"/>
                            </video>
                        </div>
  */}

                    </div>
                </div>
            </div>
            {/* <RecentNewsSection className=" mx-auto px-4 py-8"/> */}
            {/* <EventsSection className="mx-auto px-4 py-8" events={events}/> */}
        </div>
    );
};

export default HomePage;