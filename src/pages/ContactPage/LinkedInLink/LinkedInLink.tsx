import React from 'react';

import ImgProfilePic from '~images/global/travis-hoki.jpg';

import './LinkedInLink.scss';

export const LinkedInLink = () => (
	<>
		<p className="preference-text">Connect with me on LinkedIn</p>

		<a
			className="linked-link"
			href="https://www.linkedin.com/in/travishoki"
			rel="noreferrer"
			target="_blank"
			title="Travis's Linked In"
		>
			<img height="50" src={ImgProfilePic} width="50" />
			<p>Connect with me on</p>
			<i className="fa fa-linkedin" />
		</a>
	</>
);
