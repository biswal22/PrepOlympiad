import React from 'react';
import Subjects from './components/Subjects.jsx';
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/HomePage.jsx";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/About.jsx";

function App() {


    return (
        <div className='font-sans'>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/subjects" element={<Subjects />} />
                    {/* <Route path="/team" element={<HomePage/>} /> */}
                    {/*<Route path="/wiki" element={<HomePage/>} />*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;