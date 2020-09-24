import React from 'react';
import { NavLink } from 'react-router-dom';

import BluehostAffiliate from '../Affiliate/BluehostAffiliate';
import SocialIcons from '../SocialIcons/SocialIcons';

const SubFooter = () => (
    <div id="subFooter">
        <div className="contact-info">
            <SocialIcons/>
            <NavLink
				to="/contact"
				activeClassName="active"
				className="contact-link"
			>Contact Me</NavLink>
        </div>
        <BluehostAffiliate />
    </div>
);

export default SubFooter;
