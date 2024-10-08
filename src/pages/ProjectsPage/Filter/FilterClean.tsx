import React from 'react';

import './FilterClean.scss';

export const FilterClean = ({ toggleOpenFilter }: FilterCleanProps) => (
	<div className="filter-clean filter-item pointer" onClick={toggleOpenFilter}>
		<p>Filter by Tech</p>
		<i className="fa fa-chevron-down" />
	</div>
);

type FilterCleanProps = {
	toggleOpenFilter: () => void;
};
