import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TECH, TechFilterType } from '~const/Tech.const';

import { CurrentFilterBase } from '../CurrentFilterBase/CurrentFilterBase';

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
		<CurrentFilterBase icon={faXmark} onClickIcon={onClearAndCloseFilter}>
			<TechIcon className={styles.techIcon} name={filter} />
			<p>{label}</p>
		</CurrentFilterBase>
	);
};

type CurrentFilterProps = {
	filter: TechFilterType;
	onClearAndCloseFilter: () => void;
};
