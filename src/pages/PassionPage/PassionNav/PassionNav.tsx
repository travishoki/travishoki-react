import React from 'react';

import { faBook, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '~const/Routes.const';

import styles from './PassionNav.module.scss';

export const PassionNav = () => (
	<div className={styles.passionNav}>
		<nav>
			<NavLink
				className={({ isActive }) =>
					classNames(styles.navButton, { [styles.active]: isActive })
				}
				to={ROUTES.HOKI_SKATEBOARDS}
			>
				Skate Company
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					classNames(styles.navButton, { [styles.active]: isActive })
				}
				to={ROUTES.MOBILE_APP}
			>
				Skate App <FontAwesomeIcon icon={faMobile} />
			</NavLink>
			<NavLink
				className={({ isActive }) =>
					classNames(styles.navButton, { [styles.active]: isActive })
				}
				to={ROUTES.FIGHT_FOR_YOUR_DREAMS}
			>
				Fight Book <FontAwesomeIcon icon={faBook} />
			</NavLink>
		</nav>
	</div>
);
