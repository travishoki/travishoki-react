import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import { ROUTES } from '~const/Routes.const';

import { MenuButton } from './MenuButton/MenuButton';
import { NavItem } from './NavItem/NavItem';

import styles from './Nav.module.scss';

export const Nav = () => {
	const location = useLocation();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		close();
	}, [location]);

	const close = () => setOpen(false);
	const toggleOpen = () => setOpen(!open);

	return (
		<>
			<MenuButton onClick={toggleOpen} />

			<ul
				className={classNames(styles.navigation, {
					[styles.open]: open,
				})}
			>
				<NavItem title="Home" to={ROUTES.HOME} />
				<NavItem title="Projects" to={ROUTES.PROJECTS} />
				<NavItem title="Resume" to={ROUTES.RESUME} />
				<NavItem title="Education" to={ROUTES.EDUCATION} />
				<NavItem title="About" to={ROUTES.ABOUT} />
				<NavItem title="Passion" to={ROUTES.HOKI_SKATEBOARDS} />
				<NavItem title="Contact" to={ROUTES.CONTACT} />
			</ul>
		</>
	);
};
