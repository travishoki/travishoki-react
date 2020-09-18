import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import BluehostAffiliate from '../Affiliate/BluehostAffiliate';
import SocialIcons from '../SocialIcons/SocialIcons';

class Footer extends Component {
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
                    <i
						className="circ-sm fa fa-angle-up back-to-top"
						onClick={this.scrollToTop}
					/>
                </div>
            </Fragment>
        );
    }
}

export default Footer;
