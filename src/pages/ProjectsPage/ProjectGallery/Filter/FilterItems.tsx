import React from 'react';

import { FilterItem } from './FilterItem';
import { TechFilterType, TechKeys } from '~const/Tech.const';

export const FilterItems = ({
	filter,
	filterList,
	filterTerm,
	onClearAndCloseFilter,
	onSelectFilter,
}: FilterItemsProps) => {
	const filterListFiltered = filterList.filter((item) => {
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
	filterList: (keyof TechKeys)[];
	filterTerm: string | null;
	onClearAndCloseFilter: () => void;
	onSelectFilter: (filter: TechFilterType) => void;
};
