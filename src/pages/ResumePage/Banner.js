import React from 'react';
import { Link } from 'react-router';

const img_resume = require('../../../images/global/resume.png');

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
			src={img_resume}
		/>
    </div>
);

export default Banner;
