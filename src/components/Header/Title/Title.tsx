import React from 'react';

import { NavLink } from 'react-router-dom';

import { ROUTES } from '~const/Routes.const';

import styles from './Title.module.scss';

export const Title = () => (
	<NavLink className={styles.navTitle} to={ROUTES.HOME}>
		Travis Hoki
	</NavLink>
);
