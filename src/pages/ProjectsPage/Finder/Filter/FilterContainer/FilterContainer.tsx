import React, { ReactNode } from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FilterContainer.module.scss';

export const FilterContainer = ({
	children,
	icon,
	onClickIcon,
}: FilterContainerProps) => (
	<div className={styles.filterContainer}>
		<div className={styles.content}>{children}</div>
		<FontAwesomeIcon
			className={styles.icon}
			icon={icon}
			onClick={onClickIcon}
		/>
	</div>
);

type FilterContainerProps = {
	children: ReactNode;
	icon: IconDefinition;
	onClickIcon: () => void;
};
