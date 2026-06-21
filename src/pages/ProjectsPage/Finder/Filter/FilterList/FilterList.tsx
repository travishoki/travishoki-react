import React from 'react';

import { TechFilterType, TechKey } from '~const/Tech.const';

import { ItemContent } from '../ItemContent/ItemContent';

import styles from './FilterList.module.scss';

export const FilterList = ({
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
		return <p className="center pt-2">No Results</p>;
	}

	return (
		<div className={styles.filterList}>
			{!filterTerm && (
				<ItemContent
					label="All"
					onClick={onClearAndCloseFilter}
					techKey="all"
				/>
			)}

			{filterListFiltered.map((item) => (
				<ItemContent
					key={item}
					label={item}
					onClick={onSelectFilter}
					techKey={item}
				/>
			))}
		</div>
	);
};

type FilterItemsProps = {
	filterList: TechKey[];
	filterTerm: string | null;
	onClearAndCloseFilter: () => void;
	onSelectFilter: (filter: TechFilterType) => void;
};
