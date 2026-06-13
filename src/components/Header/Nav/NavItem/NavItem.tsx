import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './NavItem.module.scss';

export const NavItem = ({ title, to }: NavItemProps) => {
	return (
		<li>
			<NavLink
				className={(navData) => (navData.isActive ? styles.active : '')}
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
