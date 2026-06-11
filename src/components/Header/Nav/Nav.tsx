import React, { useEffect, useState } from 'react';

import classnames from 'classnames';
import { useLocation } from 'react-router-dom';

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
			<div className={styles.menuBtn}>
				<i
					className={`fa fa-bars ${styles.mobileMenuIcon}`}
					onClick={toggleOpen}
				/>
			</div>

			<ul
				className={classnames(styles.navigation, {
					[styles.open]: open,
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
