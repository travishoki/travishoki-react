import React from 'react';
import { NavLink } from 'react-router-dom';

import { BluehostAffiliate } from './BluehostAffiliate';
import { SocialIcons } from '../SocialIcons/SocialIcons';

import './SubFooter.scss';

export const SubFooter = () => (
	<div id="subfooter">
		<div className="contact-info">
			<SocialIcons />
			<NavLink className="active contact-link" to="/contact">
				Contact Me
			</NavLink>
		</div>
		<BluehostAffiliate />
	</div>
);
