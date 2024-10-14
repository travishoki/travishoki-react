import React from 'react';

import { BackToTop } from './BackToTop';
import { SubFooter } from './SubFooter';

import './Footer.scss';

const YEAR = new Date().getFullYear();
export const Footer = () => (
	<>
		<SubFooter />
		<div className="center" id="footer">
			<p>©{YEAR} Travishoki.com All Rights Reserved</p>
			<BackToTop />
		</div>
	</>
);
