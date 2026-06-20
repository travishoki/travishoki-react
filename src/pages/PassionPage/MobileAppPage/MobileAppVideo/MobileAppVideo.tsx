import React from 'react';

import styles from './MobileAppVideo.module.scss';

const VIDEO_SRC = '/videos/game-launch.mp4';

export const MobileAppVideo = () => (
	<div className={styles.mobileAppVideo}>
		<video controls muted playsInline src={VIDEO_SRC} />
	</div>
);
