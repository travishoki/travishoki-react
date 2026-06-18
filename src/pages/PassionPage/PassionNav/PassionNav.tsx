import React from 'react';

import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './PassionNav.module.scss';

export const PassionNav = () => (
	<nav className={styles.passionNav}>
		<NavLink
			className={({ isActive }) =>
				classNames(styles.navButton, { [styles.active]: isActive })
			}
			to="/passion/hoki-skateboards"
		>
			Hoki Skateboards
		</NavLink>
		<NavLink
			className={({ isActive }) =>
				classNames(styles.navButton, { [styles.active]: isActive })
			}
			to="/passion/fight-for-your-dreams"
		>
			Fight For Your Dreams
		</NavLink>
	</nav>
);
