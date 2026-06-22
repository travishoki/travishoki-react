import React from 'react';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';

import styles from './AppBadges.module.scss';

export const AppBadges = () => {
	return (
		<div className={styles.appBadges}>
			<ExternalLink
				href="https://apps.apple.com/us/app/hoki-skateboards/id1622675312"
				title="Download on the App Store"
			>
				<img
					alt="Download on the App Store"
					className={styles.appleBadge}
					height="40"
					src="https://hokiskateboards.com/wp-content/themes/hokiskateboards-wp/src/images/app/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
					width="120"
				/>
			</ExternalLink>
			<ExternalLink
				href="https://play.google.com/store/apps/details?id=com.hokiskateboards.app&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
				title="Get it on Google Play"
			>
				<img
					alt="Get it on Google Play"
					className={styles.googleBadge}
					height="250"
					src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
					width="646"
				/>
			</ExternalLink>
		</div>
	);
};
