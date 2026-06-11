import React from 'react';

import { Nav } from './Nav/Nav';
import { Title } from './Title/Title';

import styles from './Header.module.scss';

export const Header = () => (
	<div className={styles.header}>
		<div className="boxed">
			<Title />
			<Nav />
		</div>
	</div>
);
