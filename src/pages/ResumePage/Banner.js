import React from 'react';

import ImgResume from '../../images/global/resume.png';

const Banner = () => (
    <div className="banner">
        <div className="banner-cont">
            <h1>Resume</h1>

            <a
				className="btn btn-primary btn-lg"
				href="http://travishoki.com/portfolio/pdfs/travis-hoki-resume.pdf"
				target="_blank"
			>
                <i className="fa fa-download" /> Download
            </a>
        </div>

        <div className="banner-bg" />
        <img
			className="banner-pic"
			src={ImgResume}
		/>
    </div>
);

export default Banner;
