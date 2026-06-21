import React from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FilterContainerIcon.module.scss';

export const FilterContainerIcon = ({
	icon,
	onClick,
}: FilterContainerIconProps) => (
	<div className={styles.iconContainer}>
		<FontAwesomeIcon className={styles.icon} icon={icon} onClick={onClick} />
	</div>
);

type FilterContainerIconProps = {
	icon: IconDefinition;
	onClick: () => void;
};
