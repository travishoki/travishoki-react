import React from 'react';

import classNames from 'classnames';

import styles from './ZoomOverlay.module.scss';

export const ZoomOverlay = ({
	iconClassName = 'fa-search-plus',
	onClick,
}: ZoomOverlayProps) => {
	return (
		<div className={styles.zoomOverlay} onClick={onClick}>
			<i className={classNames('fa', iconClassName)} />
		</div>
	);
};

type ZoomOverlayProps = {
	iconClassName?: string;
	onClick: () => void;
};
