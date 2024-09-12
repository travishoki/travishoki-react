import React from 'react';

import BackToTop from './BackToTop';
import SubFooter from './SubFooter';

import './Footer.scss';

const Footer = () => (
	<>
		<SubFooter />
		<div className="center" id="footer">
			<p>Copyright Travishoki.com All Rights Reserved</p>
			<BackToTop />
		</div>
	</>
);

export default Footer;
