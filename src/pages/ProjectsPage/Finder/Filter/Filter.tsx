import React from 'react';

import { TechFilterType, TechKey } from '~const/Tech.const';

import { CurrentFilter } from './CurrentFilter/CurrentFilter';
import { FilterClean } from './FilterClean/FilterClean';
import { FilterList } from './FilterList/FilterList';
import { FilterOpen } from './FilterOpen/FilterOpen';

export const Filter = ({
	filter,
	filterList,
	filterTerm,
	isFilterOpen = false,
	onChangeFilter,
	onClearAndCloseFilter,
	onSelectFilter,
	toggleOpenFilter,
}: FilterProps) => {
	const filterIsDefined = filter !== 'all' && filter !== 'null';

	if (filter && filterIsDefined) {
		return (
			<CurrentFilter
				filter={filter}
				onClearAndCloseFilter={onClearAndCloseFilter}
			/>
		);
	}

	if (isFilterOpen) {
		return (
			<>
				<FilterOpen
					filterTerm={filterTerm}
					onChangeFilter={onChangeFilter}
					onClearAndCloseFilter={onClearAndCloseFilter}
				/>
				<FilterList
					filterList={filterList}
					filterTerm={filterTerm}
					onClearAndCloseFilter={onClearAndCloseFilter}
					onSelectFilter={onSelectFilter}
				/>
			</>
		);
	}

	return <FilterClean toggleOpenFilter={toggleOpenFilter} />;
};

type FilterProps = {
	filter: TechFilterType;
	filterList: TechKey[];
	filterTerm: TechFilterType;
	isFilterOpen?: boolean;
	onChangeFilter: React.ChangeEventHandler<HTMLInputElement>;
	onClearAndCloseFilter: () => void;
	onSelectFilter: (filter: TechFilterType) => void;
	toggleOpenFilter: () => void;
};
