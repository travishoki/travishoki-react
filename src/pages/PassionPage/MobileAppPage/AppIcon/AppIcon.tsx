import React from 'react';

import styles from './AppIcon.module.scss';

const APP_ICON_SRC =
	'http://www.hokiskateboards.com/wp-content/themes/hokiskateboards-wp/src/images/app/icon.png';

export const AppIcon = () => (
	<img
		className={styles.appIcon}
		height="200"
		src={APP_ICON_SRC}
		title="Hoki Skateboards App"
		width="200"
	/>
);
