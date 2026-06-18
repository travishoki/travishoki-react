import React from 'react';

import styles from './AppBadges.module.scss';

export const AppBadges = () => {
	return (
		<div className={styles.appBadges}>
			<a
				href="https://apps.apple.com/us/app/hoki-skateboards/id1622675312"
				rel="noreferrer"
				target="_blank"
				title="Download on the App Store"
			>
				<img
					alt="Download on the App Store"
					className={styles.appleBadge}
					height="40"
					src="https://hokiskateboards.com/wp-content/themes/hokiskateboards-wp/src/images/app/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
					width="120"
				/>
			</a>
			<a
				href="https://play.google.com/store/apps/details?id=com.hokiskateboards.app&amp;pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
				rel="noreferrer"
				target="_blank"
				title="Get it on Google Play"
			>
				<img
					alt="Get it on Google Play"
					className={styles.googleBadge}
					height="250"
					src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
					width="646"
				/>
			</a>
		</div>
	);
};
