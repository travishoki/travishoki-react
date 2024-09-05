import React from 'react';

import FilterItem from './FilterItem';
import { FILTER_LIST } from '../ProjectsPage.data';
import { TechFilterType } from '~const/Tech.const';

const FilterItems = ({
	filter,
	filterTerm,
	onClearAndCloseFilter,
	onSelectFilter,
}: FilterItemsProps) => {
	const filterListFiltered = FILTER_LIST.filter((item) => {
		return (
			filterTerm === null ||
			item.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1
		);
	});

	if (filterListFiltered.length === 0) {
		return <p className="center">No Results</p>;
	}

	return (
		<ul className="tech-icon-list filters">
			{!filterTerm && (
				<li
					className="filter-item tech-icon-item"
					onClick={onClearAndCloseFilter}
				>
					<p>All</p>
				</li>
			)}

			{filterListFiltered.map((item, index) => (
				<FilterItem
					key={index}
					filter={filter}
					item={item}
					onSelectFilter={onSelectFilter}
				/>
			))}
		</ul>
	);
};

type FilterItemsProps = {
	filter: TechFilterType;
	filterTerm: string | null;
	onClearAndCloseFilter: () => void;
	onSelectFilter: (filter: TechFilterType) => void;
};

export default FilterItems;
