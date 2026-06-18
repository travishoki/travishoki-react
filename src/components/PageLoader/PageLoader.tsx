import React from 'react';

import styles from './PageLoader.module.scss';

export const PageLoader = () => (
	<div className={styles.pageLoader}>
		<span className={styles.dot} />
		<span className={styles.dot} />
		<span className={styles.dot} />
	</div>
);
