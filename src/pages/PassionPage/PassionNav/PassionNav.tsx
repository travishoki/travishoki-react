import React from 'react';

import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '~const/Routes.const';

import styles from './PassionNav.module.scss';

export const PassionNav = () => (
	<nav className={styles.passionNav}>
		<NavLink
			className={({ isActive }) =>
				classNames(styles.navButton, { [styles.active]: isActive })
			}
			to={ROUTES.HOKI_SKATEBOARDS}
		>
			Hoki Skateboards <i className="fa fa-mobile" />
		</NavLink>
		<NavLink
			className={({ isActive }) =>
				classNames(styles.navButton, { [styles.active]: isActive })
			}
			to={ROUTES.FIGHT_FOR_YOUR_DREAMS}
		>
			Fight For Your Dreams <i className="fa fa-book" />
		</NavLink>
	</nav>
);
