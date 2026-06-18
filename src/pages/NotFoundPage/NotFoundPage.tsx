import React from 'react';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
	<div className="not-found" id="container">
		<h1>Page Not Found</h1>

		<video autoPlay loop muted playsInline src="/videos/fail-montage.MP4" />
	</div>
);
