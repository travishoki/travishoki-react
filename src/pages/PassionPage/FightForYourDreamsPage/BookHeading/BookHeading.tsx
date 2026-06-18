import React from 'react';

import styles from './BookHeading.module.scss';

export const BookHeading = () => {
	return (
		<div className={styles.bookHeading}>
			<h3>Fight For Your Dreams</h3>
			<p>Written by Kaytlin Neil (Professional MMA Fighter)</p>
			<p>Illustrated by Travis Hoki</p>
		</div>
	);
};
