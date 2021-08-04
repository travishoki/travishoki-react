import React from 'react';
import { Link } from "react-router-dom";

import SocialIcons from '../../../components/SocialIcons/SocialIcons';
import ImgProfilePic from '../../../images/global/travis-hoki.png';

const Banner = () => (
    <div className="banner">
        <div className="banner-cont">
			<h1>Web Developer</h1>
			<SocialIcons/>
            <Link
				className="btn btn-primary btn-lg"
				to="/contact"
			>Contact Me</Link>
        </div>

        <div className="banner-bg" />

		<img
			className="banner-pic"
			src={ImgProfilePic}
		/>
    </div>
);

export default Banner;
