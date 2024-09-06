import React from 'react';

import { NavLink } from 'react-router-dom';

import './Nav.scss';

const NavItem = ({ title, to }: NavItemProps) => {
	return (
		<li>
			<NavLink
				className={(navData) => (navData.isActive ? 'active' : '')}
				to={to}
			>
				{title}
			</NavLink>
		</li>
	);
};

type NavItemProps = {
	title: string;
	to: string;
};

export default NavItem;
