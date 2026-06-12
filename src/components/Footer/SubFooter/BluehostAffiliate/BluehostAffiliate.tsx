import React from 'react';

import styles from './BluehostAffiliate.module.scss';

export const BluehostAffiliate = () => (
	<div className={styles.affiliates}>
		<a
			aria-label="Bluehost Affiliate Link"
			href="https://www.bluehost.com/track/travishoki/"
			rel="noreferrer"
			target="_blank"
		>
			<img
				alt="Bluehost Affiliate"
				src="https://bluehost-cdn.com/media/partner/images/travishoki/160x40/160x40BW.png"
			/>
		</a>
	</div>
);
