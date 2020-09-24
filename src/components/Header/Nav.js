import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

const Nav = ({
	showMobileNav,
	toggleMobileMenu,
}) => (
	<Fragment>
        <div className="menu-btn">
            <i
				className="fa fa-bars mobileMenuIcon"
				onClick={toggleMobileMenu}
			/>
        </div>

        <ul
			className={classnames(
				'nav',
				{
					open: showMobileNav,
				}
			)}
		>
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/projects" activeClassName="active">Projects</NavLink></li>
            <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
    </Fragment>
);

Nav.propTypes = {
	showMobileNav: PropTypes.bool,
	toggleMobileMenu: PropTypes.func,
};

export default Nav;
