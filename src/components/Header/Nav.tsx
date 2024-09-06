import React, { useEffect, useState } from 'react';

import { useLocation, NavLink } from 'react-router-dom';
import classnames from 'classnames';

import './Nav.scss';

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
				<li>
					<NavLink
						className={(navData) => (navData.isActive ? 'active' : '')}
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className={(navData) => (navData.isActive ? 'active' : '')}
						to="/projects"
					>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink
						className={(navData) => (navData.isActive ? 'active' : '')}
						to="/resume"
					>
						Resume
					</NavLink>
				</li>
				<li>
					<NavLink
						className={(navData) => (navData.isActive ? 'active' : '')}
						to="/about"
					>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						className={(navData) => (navData.isActive ? 'active' : '')}
						to="/contact"
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</>
	);
};

export default Nav;
