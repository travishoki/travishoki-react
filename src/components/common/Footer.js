import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

import SocialIcons from '../common/SocialIcons';
import BluehostAffiliate from '../Affiliate/BluehostAffiliate';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    scrollStep(){
        const scrollStepInPx = 50;

        if (window.pageYOffset === 0) {
            clearInterval(this.state.intervalId);
        }

        window.scroll(0, window.pageYOffset - scrollStepInPx);
    }

    scrollToTop(){
        const delayInMs = 16.66;
        let intervalId = setInterval(this.scrollStep.bind(this), delayInMs);

        this.setState({ intervalId: intervalId });
    }

    render() {
        return (
            <div>
                <div id="subFooter">
                    <div className="contact-info">
                        <SocialIcons/>
                        <Link
							to="/contact"
							activeClassName="active"
							className="contact-link"
						>Contact Me</Link>
                    </div>
                    <BluehostAffiliate />
                </div>

                <div id="footer" className="center">
                    <p>Copyright Travishoki.com All Rights Reserved</p>
                    <i
						className="circ-sm fa fa-angle-up back-to-top"
						onClick={this.scrollToTop}
					/>
                </div>
            </div>
        );
    }
}

export default Footer;
