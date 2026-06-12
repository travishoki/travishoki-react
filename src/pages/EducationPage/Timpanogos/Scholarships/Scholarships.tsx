import React from 'react';

import imgGearUp from '~images/education/gear-up.jpg';

import styles from './Scholarships.module.scss';

export const Scholarships = () => (
	<div className={`${styles.scholarships} mb-2`}>
		<img alt="Gear Up Logo" src={imgGearUp} />{' '}
		<p className={styles.scholarshipDescription}>
			Recipient of the{' '}
			<a
				href="https://www.uvu.edu/gear-up/index.html"
				rel="noreferrer"
				target="_blank"
			>
				Gear Up
			</a>{' '}
			scholarship.
		</p>
	</div>
);
