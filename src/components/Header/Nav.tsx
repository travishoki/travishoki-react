import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import classnames from 'classnames';

import './Nav.scss';
import NavItem from './NavItem';

const Nav = () => {
	const location = useLocation();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		close();
	}, [location]);

	const close = () => setOpen(false);
	const toggleOpen = () => setOpen(!open);

	return (
		<>
			<div className="menu-btn">
				<i className="fa fa-bars mobileMenuIcon" onClick={toggleOpen} />
			</div>

			<ul
				className={classnames('nav', {
					open,
				})}
			>
				<NavItem title="Home" to="/" />
				<NavItem title="Projects" to="projects" />
				<NavItem title="Resume" to="resume" />
				<NavItem title="Education" to="education" />
				<NavItem title="About" to="about" />
				<NavItem title="Passion" to="passion" />
				<NavItem title="Contact" to="contact" />
			</ul>
		</>
	);
};

export default Nav;
