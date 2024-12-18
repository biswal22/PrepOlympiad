import React from 'react';
import Subjects from './components/Subjects.jsx';
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

import Mathematics from './subjects/Math.jsx';
import Chemistry from './subjects/Chemistry.jsx';
import Physics from './subjects/Physics.jsx';
import Biology from './subjects/Biology.jsx';
import EarthScience from './subjects/EarthScience.jsx';

import TimedExam from './practice/TimedExam.jsx';
import RandomProblems from './practice/RandomProblems.jsx';
import Downloads from './practice/Downloads.jsx';
import Resources from './practice/Resources.jsx';

// Custom Auth0 Provider with redirection logic
const Auth0ProviderWithHistory = ({ children }) => {
    const navigate = useNavigate();

    // Handle redirection after login
    const onRedirectCallback = (appState) => {
        navigate(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain="dev-di4gbp5dejb4exf4.us.auth0.com"
            clientId="vJjKWd8IUdjWfTiDFESnbbjangYaQKAi"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {children}
        </Auth0Provider>
    );
};

function App() {
    return (
        <div className="font-sans custom-bg min-h-screen">
            <BrowserRouter>
                <Auth0ProviderWithHistory>
                    <Navbar />
                    <div className="flex-grow">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/subjects" element={<Subjects />} />

                            <Route path="/mathematics" element={<Mathematics />} />
                            <Route path="/chemistry" element={<Chemistry />} />
                            <Route path="/physics" element={<Physics />} />
                            <Route path="/biology" element={<Biology />} />
                            <Route path="/earthscience" element={<EarthScience />} />

                            <Route path="/timed-exam" element={<TimedExam />} />
                            <Route path="/random-problems" element={<RandomProblems />} />
                            <Route path="/downloads" element={<Downloads />} />
                            <Route path="/resources" element={<Resources />} />
                        </Routes>
                    </div>
                    <Footer />
                </Auth0ProviderWithHistory>
            </BrowserRouter>
        </div>
    );
}

export default App;