import React from 'react';
import { NavLink } from 'react-router-dom';

import { BluehostAffiliate } from './BluehostAffiliate';
import { SocialIcons } from '../SocialIcons/SocialIcons';

import './SubFooter.scss';

export const SubFooter = () => (
	<div id="subfooter">
		<div className="contact-info m-2">
			<SocialIcons />
			<NavLink className="active contact-link ms-3" to="/contact">
				Contact
			</NavLink>
		</div>
		<BluehostAffiliate />
	</div>
);
