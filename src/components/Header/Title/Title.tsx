import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './Title.module.scss';

export const Title = () => (
	<NavLink className={styles.navTitle} to="/">
		Travis Hoki
	</NavLink>
);
