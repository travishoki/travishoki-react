import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import BackToTop from './BackToTop';
import BluehostAffiliate from '../Affiliate/BluehostAffiliate';
import SocialIcons from '../SocialIcons/SocialIcons';

const Footer = () => (
    <Fragment>
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

        <div
			id="footer"
			className="center"
		>
            <p>Copyright Travishoki.com All Rights Reserved</p>
			<BackToTop />
        </div>
    </Fragment>
);

export default Footer;
