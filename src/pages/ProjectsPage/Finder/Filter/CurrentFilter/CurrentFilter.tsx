import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { TECH, TechFilterType, TechKey } from '~const/Tech.const';

import { FilterContainer } from '../FilterContainer/FilterContainer';
import { ItemContent } from './ItemContent/ItemContent';

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
		<FilterContainer
			className={styles.container}
			icon={faXmark}
			onClickIcon={onClearAndCloseFilter}
		>
			<ItemContent label={label} techKey={techKey} />
		</FilterContainer>
	);
};

type CurrentFilterProps = {
	filter: TechFilterType;
	onClearAndCloseFilter: () => void;
};
