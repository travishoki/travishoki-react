import React from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { FilterContainer } from '../FilterContainer/FilterContainer';
import { FilterForm } from '../FilterForm/FilterForm';

export const FilterClean = ({ toggleOpenFilter }: FilterCleanProps) => (
	<FilterContainer icon={faChevronDown} onClickIcon={toggleOpenFilter}>
		<FilterForm onClick={toggleOpenFilter} readOnly />
	</FilterContainer>
);

type FilterCleanProps = {
	toggleOpenFilter: () => void;
};
