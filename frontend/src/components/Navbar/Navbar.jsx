import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross2} from "react-icons/rx";
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.navlogo} alt="app__logo" style={{width: '100px', height: '100px'}}/>
                <h3 style={{color: 'white'}}>Bus-To-Go</h3>
            </div>
            <div className="app__navbar-login">
                <a href="/" className="p__opensans">Home</a>
                <a href="/bookings" className="p__opensans">Bookings</a>
                <a href="/about" className="p__opensans">About Us</a>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <RxCross2 fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href="/" style={{ color: 'white' }} onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="/bookings"  style={{ color: 'white' }} onClick={() => setToggleMenu(false)}>Bookings</a></li>
                            <li><a href="/about" style={{ color: 'white' }} onClick={() => setToggleMenu(false)}>About Us</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
