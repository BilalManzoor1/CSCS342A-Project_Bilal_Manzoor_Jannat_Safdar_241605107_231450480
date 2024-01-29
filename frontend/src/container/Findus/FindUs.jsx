import React from 'react';
import {Link} from 'react-router-dom';
import {SubHeading} from '../../components';
import {images} from '../../constants';

const FindUs = () => (
    <div className="app__bg app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
            <SubHeading title=""/>
            <h1 className="headtext__cormorant" style={{marginBottom: '3rem'}}>Cheaper...</h1>
            <div className="app__wrapper-content">
                <p className="p__opensans">Embark on affordable journeys without compromising comfort! Our buses are
                    becoming
                    more
                    economical,
                    delivering enhanced quality and upgraded comfort at every turn. Experience the joy
                    of
                    travel with
                    consistently improving services that prioritize your budget without sacrificing the
                    luxuries of a
                    comfortable ride. Ride with us – where affordability meets excellence!</p>
            </div>
            <Link to="/bookings" style={{textDecoration: 'none'}}>
                <button
                    type="button"
                    className="custom__button"
                    style={{marginTop: '2rem'}}>
                    Book Now
                </button>
            </Link>
        </div>

        <div className="app__wrapper_img">
            <img src={images.second} alt="finus_img"/>
        </div>
    </div>
);

export default FindUs;
