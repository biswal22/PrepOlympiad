import React from 'react';
import Subjects from './components/Subjects.jsx';
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx"

function App() {


    return (
        <div className='font-sans custom-bg min-h-screen'>
            <BrowserRouter>
                <Navbar/>
                <div className='flex-grow'>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/subjects" element={<Subjects />} />
                    </Routes>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;