import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { TechFilterType } from '~const/Tech.const';

import { FilterContainer } from '../FilterContainer/FilterContainer';
import { FilterForm } from '../FilterForm/FilterForm';

export const FilterOpen = ({
	filterTerm,
	onChangeFilter,
	onClearAndCloseFilter,
}: FilterOpenProps) => (
	<FilterContainer icon={faXmark} onClickIcon={onClearAndCloseFilter}>
		<FilterForm autoFocus onChange={onChangeFilter} value={filterTerm || ''} />
	</FilterContainer>
);

type FilterOpenProps = {
	filterTerm: TechFilterType;
	onChangeFilter: React.ChangeEventHandler<HTMLInputElement>;
	onClearAndCloseFilter: () => void;
};
