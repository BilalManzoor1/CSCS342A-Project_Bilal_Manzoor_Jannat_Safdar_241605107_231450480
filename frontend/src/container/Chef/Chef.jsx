import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Chef.css';

const Chef = () => (
    <div className="app__bg app__wrapper section__padding">
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.first} alt="chef_image"/>
        </div>
        <div className="app__wrapper_info">
            <SubHeading title=""/>

            <h1 className="headtext__cormorant">...Reliability</h1>
            <div className="app__chef-content">
                <p className="p__opensans"> With a proven track record of punctuality and consistency, buses ensure
                    passengers
                    reach
                    their destinations on time. The robust and well-maintained fleet, coupled with
                    experienced drivers, guarantees a dependable journey. Whether it's daily commuting
                    or
                    long-distance travel, buses stand as a symbol of reliability, providing a safe and
                    trustworthy means of reaching your endpoint. Embrace the certainty of bus travel –
                    where
                    reliability meets the road, ensuring you arrive at your desired location securely
                    and on
                    schedule. </p>
            </div>


        </div>
    </div>
);

export default Chef;
