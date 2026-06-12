import React from 'react';

import { TechFilterType, TechKey } from '~const/Tech.const';

import { FilterItem } from './FilterItem/FilterItem';

import styles from './FilterItems.module.scss';

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
		<ul className={styles.filterList}>
			{!filterTerm && (
				<li className="filterItem" onClick={onClearAndCloseFilter}>
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
	filterList: TechKey[];
	filterTerm: string | null;
	onClearAndCloseFilter: () => void;
	onSelectFilter: (filter: TechFilterType) => void;
};
