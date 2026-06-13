import React from 'react';

import classNames from 'classnames';

import styles from './OverlayWithIcon.module.scss';

export const OverlayWithIcon = ({
	iconClassName = 'fa-search-plus',
	onClick,
}: ZoomOverlayProps) => {
	return (
		<div className={styles.overlayWithIcon} onClick={onClick}>
			<i className={classNames('fa', iconClassName)} />
		</div>
	);
};

type ZoomOverlayProps = {
	iconClassName?: string;
	onClick: () => void;
};
