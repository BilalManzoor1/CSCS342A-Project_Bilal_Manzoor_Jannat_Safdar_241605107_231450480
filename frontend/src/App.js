// App.js
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/Navbar/Navbar';
import HomePage from './pages/home';
import About from './pages/about';
import Bookings from './pages/booking';
import {Footer} from "./container";

const App = () => (
    <Router>
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/bookings" element={<Bookings/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>

        </div>
    </Router>
);

export default App;
