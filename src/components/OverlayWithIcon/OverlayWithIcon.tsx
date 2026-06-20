import React from 'react';

import {
	faSearchPlus,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './OverlayWithIcon.module.scss';

export const OverlayWithIcon = ({
	icon = faSearchPlus,
	onClick,
}: ZoomOverlayProps) => {
	return (
		<div className={styles.overlayWithIcon} onClick={onClick}>
			<FontAwesomeIcon icon={icon} />
		</div>
	);
};

type ZoomOverlayProps = {
	icon?: IconDefinition;
	onClick: () => void;
};
