import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import SocialIcons from '../common/SocialIcons';

const Footer = () => {
    return (
        <div>
            <div id="subFooter">
                <SocialIcons/>
                <Link to="/contact" activeClassName="active" className="contact-link">Contact Me</Link>
            </div>
            <div id="footer" className="center">
                <p>Copyright Travishoki.com All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
