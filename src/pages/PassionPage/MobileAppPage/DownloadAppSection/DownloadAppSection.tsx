import React from 'react';

import { AppBadges } from '../AppBadges';

import styles from './DownloadAppSection.module.scss';

export const DownloadAppSection = () => (
	<div className={styles.downloadAppSection}>
		<h3>Download My App!</h3>
		<p className="indent">
			Built in React Native with Typescript, using the react-native-game-engine
			and MatterJs.
		</p>

		<AppBadges />

		<p className={styles.copyright}>
			Apple and the Apple logo are trademarks of Apple Inc. Android, Google Play
			and the Google Play logo are trademarks of Google LLC.
		</p>
	</div>
);
