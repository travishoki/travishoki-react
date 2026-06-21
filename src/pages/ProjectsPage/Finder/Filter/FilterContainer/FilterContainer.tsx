import React, { ReactNode } from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { FilterContainerIcon } from './FilterContainerIcon/FilterContainerIcon';

import styles from './FilterContainer.module.scss';

export const FilterContainer = ({
	children,
	className,
	icon,
	onClickIcon,
}: FilterContainerProps) => (
	<div className={classNames(styles.filterContainer, className)}>
		<div className={styles.content}>{children}</div>
		<FilterContainerIcon icon={icon} onClick={onClickIcon} />
	</div>
);

type FilterContainerProps = {
	children: ReactNode;
	className?: string;
	icon: IconDefinition;
	onClickIcon: () => void;
};
