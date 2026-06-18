import React from 'react';

import styles from './BookHeading.module.scss';

export const BookHeading = () => {
	return (
		<div className={styles.bookHeading}>
			<p>Written by Kaytlin Neil (Professional MMA Fighter)</p>
			<p>Illustrated by Travis Hoki</p>
		</div>
	);
};
