import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { TechFilterType } from '~const/Tech.const';

import { FilterContainer } from '../FilterContainer/FilterContainer';
import { FilterInput } from '../FilterInput/FilterInput';

export const FilterForm = ({
	filterTerm,
	onChangeFilter,
	onClearAndCloseFilter,
}: FilterFormProps) => (
	<FilterContainer icon={faXmark} onClickIcon={onClearAndCloseFilter}>
		<FilterInput autoFocus onChange={onChangeFilter} value={filterTerm || ''} />
	</FilterContainer>
);

type FilterFormProps = {
	filterTerm: TechFilterType;
	onChangeFilter: React.ChangeEventHandler<HTMLInputElement>;
	onClearAndCloseFilter: () => void;
};
