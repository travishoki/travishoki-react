import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TECH, TechFilterType, TechKey } from '~const/Tech.const';

import { FilterContainer } from '../FilterContainer/FilterContainer';

import styles from './CurrentFilter.module.scss';

export const CurrentFilter = ({
	filter,
	onClearAndCloseFilter,
}: CurrentFilterProps) => {
	const techKey = filter as TechKey;
	const tech = TECH[techKey];

	if (!tech) return null;

	const { label } = tech;

	return (
		<FilterContainer icon={faXmark} onClickIcon={onClearAndCloseFilter}>
			<TechIcon className={styles.techIcon} name={techKey} />
			<p>{label}</p>
		</FilterContainer>
	);
};

type CurrentFilterProps = {
	filter: TechFilterType;
	onClearAndCloseFilter: () => void;
};
