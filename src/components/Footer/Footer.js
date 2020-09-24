import React, { Fragment } from 'react';

import BackToTop from './BackToTop';
import SubFooter from './SubFooter';

const Footer = () => (
    <Fragment>
		<SubFooter />
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
