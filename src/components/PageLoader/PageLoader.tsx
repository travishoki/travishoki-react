import React from 'react';

import LoaderGif from '~images/global/loader.gif';

import styles from './PageLoader.module.scss';

export const PageLoader = () => (
	<div className={styles.pageLoader}>
		<img alt="Loading..." src={LoaderGif} />
	</div>
);
