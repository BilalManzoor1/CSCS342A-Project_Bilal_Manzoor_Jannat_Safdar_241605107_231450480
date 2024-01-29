import React from 'react';
import { Link } from 'react-router-dom';

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            <SubHeading title="Into the Future"/>
            <h1 className="app__header-h1">The Way Forward..</h1>
            <p className="p__opensans" style={{margin: '2rem 0'}}>Book Your Seats Now Online!</p>
            <Link to="/bookings">
                <button type="button" className="custom__button">Book Seat</button>
            </Link>
        </div>

        <div className="app__wrapper_img">
            <img src={images.welcome} alt="header_img"/>
        </div>
    </div>
);

export default Header;
