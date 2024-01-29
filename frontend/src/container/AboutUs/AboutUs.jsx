import React from 'react';

import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
                <p className="p__opensans">In Pakistan, the local bus system serves as a vital component of urban
                    transportation,
                    offering a range of benefits to residents and visitors alike. The bustling streets and
                    traffic challenges in Pakistani cities, including Lahore, make local buses a practical and
                    cost-effective mode of transport. With extensive route networks, these buses provide crucial
                    connectivity, facilitating daily commuting for a diverse population.</p>
                <p className="p__opensans">Opting for local buses contributes to environmental sustainability by
                    reducing individual
                    carbon footprints. The affordability and accessibility of local buses make them an inclusive
                    option for citizens from various socio-economic backgrounds, enhancing overall city
                    accessibility and promoting community mobility.</p>

            </div>

            <div className="app__aboutus-content_knife flex__center">
                <img src={images.aboutimg} alt="about_bus"/>
            </div>

            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Developers</h1>
                <img src={images.spoon} alt="about_spoon" className="spoon__img"/>
                <p className="p__opensans">Jannat Safdar | 231450480</p>
                <p className="p__opensans">Bilal Manzoor | 241605107</p>

            </div>
        </div>
    </div>
);

export default AboutUs;
