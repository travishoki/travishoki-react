import React from 'react';

import './Banner.scss';

const Banner = () => (
	<div className="resume-banner">
		<div className="banner-cont">
			<h1>Resume</h1>

			<a
				className="btn btn-primary btn-lg"
				href="http://travishoki.com/travis-hoki-resume.pdf"
				rel="noreferrer"
				target="_blank"
			>
				<i className="fa fa-download" /> Download
			</a>
		</div>

		<div className="banner-bg" />
	</div>
);

export default Banner;
