import React from 'react';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TECH, TechFilterType } from '~const/Tech.const';

import styles from './CurrentFilter.module.scss';

export const CurrentFilter = ({
	filter,
	onClearAndCloseFilter,
}: CurrentFilterProps) => {
	if (!filter || filter === 'all' || filter === 'null') return null;

	const { label } = TECH[filter];

	return (
		<div className={styles.currentFilter}>
			<div className={styles.techContainer}>
				<TechIcon className={styles.currentFilterTechIcon} name={filter} />
				<p>{label}</p>
			</div>
			<i
				className="fa fa-close pointer f-right"
				onClick={onClearAndCloseFilter}
			/>
		</div>
	);
};

type CurrentFilterProps = {
	filter: TechFilterType;
	onClearAndCloseFilter: () => void;
};
