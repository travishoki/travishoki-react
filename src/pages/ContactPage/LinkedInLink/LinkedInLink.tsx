import React from 'react';

import ImgProfilePic from '~images/global/travis-hoki.jpg';

export const LinkedInLink = () => (
	<a
		className="linked-link"
		href="https://www.linkedin.com/in/travishoki"
		rel="noreferrer"
		target="_blank"
		title="Travis's Linked In"
	>
		<img
			className="linkedin-profile-image"
			height="50"
			src={ImgProfilePic}
			width="50"
		/>
		<p>Connect with me on</p>
		<i className="fa fa-linkedin" />
	</a>
);
