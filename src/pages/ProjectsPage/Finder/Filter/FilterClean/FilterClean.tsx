import React from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { FilterContainer } from '../FilterContainer/FilterContainer';
import { FilterInput } from '../FilterInput/FilterInput';

export const FilterClean = ({ toggleOpenFilter }: FilterCleanProps) => (
	<FilterContainer icon={faChevronDown} onClickIcon={toggleOpenFilter}>
		<FilterInput onClick={toggleOpenFilter} readOnly />
	</FilterContainer>
);

type FilterCleanProps = {
	toggleOpenFilter: () => void;
};
