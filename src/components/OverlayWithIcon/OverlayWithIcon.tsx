import React from 'react';

import {
	faSearchPlus,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './OverlayWithIcon.module.scss';

export const OverlayWithIcon = ({
	icon = faSearchPlus,
	onClick,
	visible,
}: ZoomOverlayProps) => {
	return (
		<div
			className={classNames(styles.overlayWithIcon, {
				[styles.visible]: visible,
			})}
			onClick={onClick}
		>
			<FontAwesomeIcon icon={icon} />
		</div>
	);
};

type ZoomOverlayProps = {
	icon?: IconDefinition;
	onClick: () => void;
	visible?: boolean;
};
