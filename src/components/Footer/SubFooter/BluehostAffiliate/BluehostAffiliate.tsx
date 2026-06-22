import React from 'react';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';

import styles from './BluehostAffiliate.module.scss';

export const BluehostAffiliate = () => (
	<div className={styles.affiliates}>
		<ExternalLink
			aria-label="Bluehost Affiliate Link"
			href="https://www.bluehost.com/track/travishoki/"
		>
			<img
				alt="Bluehost Affiliate"
				src="https://bluehost-cdn.com/media/partner/images/travishoki/160x40/160x40BW.png"
			/>
		</ExternalLink>
	</div>
);
