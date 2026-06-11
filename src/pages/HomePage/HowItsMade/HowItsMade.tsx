import React from 'react';

import { HowItsMadeLinks } from './HowItsMadeLinks/HowItsMadeLinks';
import { HowItsMadeList } from './HowItsMadeList/HowItsMadeList';

import styles from './HowItsMade.module.scss';

export const HowItsMade = () => {
	return (
		<section className={styles['how-its-made']}>
			<h2>How This Site Was Made</h2>
			<HowItsMadeLinks />
			<HowItsMadeList />
		</section>
	);
};
