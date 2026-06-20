import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TECH, TechFilterType } from '~const/Tech.const';

import styles from './CurrentFilter.module.scss';

export const CurrentFilter = ({
	filter,
	onClearAndCloseFilter,
}: CurrentFilterProps) => {
	if (!filter || filter === 'all' || filter === 'null') return null;

	const tech = TECH[filter];

	if (!tech) return null;

	const { label } = tech;

	return (
		<div className={styles.currentFilter}>
			<div className={styles.techContainer}>
				<TechIcon className={styles.currentFilterTechIcon} name={filter} />
				<p>{label}</p>
			</div>
			<FontAwesomeIcon
				className="pointer f-right"
				icon={faXmark}
				onClick={onClearAndCloseFilter}
			/>
		</div>
	);
};

type CurrentFilterProps = {
	filter: TechFilterType;
	onClearAndCloseFilter: () => void;
};
