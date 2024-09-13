import React from 'react';

import './ContactInfo.scss';

export const ContactInfo = () => (
	<div className="contact-info">
		<div className="block">
			<p>Travis Hoki</p>
			<p>801-691-2373</p>
			<p>travis.hoki@gmail.com</p>
			<p>Based out of Pleasant Grove, UT</p>
		</div>

		<div className="block">
			<p>Open to remove work.</p>
		</div>

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
				src="https://media.licdn.com/dms/image/v2/D5603AQHVlroZx8i2gA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1707861433706?e=1731542400&v=beta&t=yYdc6o03EMz7gWcRTU6qaCz3KQdoDONcTVLu79DNj98"
				width="50"
			/>
			Connect with me on:
			<i className="fa fa-linkedin" />
		</a>
	</div>
);
