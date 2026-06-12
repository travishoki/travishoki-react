import React from 'react';

import styles from './ZoomOverlay.module.scss';

export const ZoomOverlay = ({ onClick }: ZoomOverlayProps) => {
	return (
		<div className={styles.zoomOverlay} onClick={onClick}>
			<i className="fa fa-search-plus" />
		</div>
	);
};

type ZoomOverlayProps = {
	onClick: () => void;
};
