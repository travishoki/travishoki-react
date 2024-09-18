import React from 'react';
import { Link } from 'react-router-dom';

import { SocialIcons } from '~components/SocialIcons/SocialIcons';
import ImgProfilePic from '~images/global/travis-hoki.jpg';

import './Banner.scss';

export const Banner = () => (
	<div className="boxed home-banner">
		<img className="banner-pic" src={ImgProfilePic} />
		<div>
			<p className="banner-name">Travis Hoki</p>
			<p className="job-title">Web Developer</p>
			<SocialIcons />
			<Link className="btn btn-primary btn-lg" to="/contact">
				Contact Me
			</Link>
		</div>
	</div>
);
