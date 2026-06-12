import React from 'react';

import { TechFilterType, TechKey } from '~const/Tech.const';

import { CurrentFilter } from './CurrentFilter/CurrentFilter';
import { FilterClean } from './FilterClean/FilterClean';
import { FilterForm } from './FilterForm/FilterForm';
import { FilterList } from './FilterList/FilterList';

export const Filter = ({
	filter,
	filterList,
	filterTerm,
	isFilterOpen = false,
	onChangeFilter,
	onClearAndCloseFilter,
	onSelectFilter,
	toggleOpenFilter,
}: FilterProps) => (
	<div>
		<CurrentFilter
			filter={filter}
			onClearAndCloseFilter={onClearAndCloseFilter}
		/>

		{!filter && (
			<>
				{isFilterOpen ? (
					<>
						<FilterForm
							filterTerm={filterTerm}
							onChangeFilter={onChangeFilter}
							onClearAndCloseFilter={onClearAndCloseFilter}
						/>
						<FilterList
							filter={filter}
							filterList={filterList}
							filterTerm={filterTerm}
							onClearAndCloseFilter={onClearAndCloseFilter}
							onSelectFilter={onSelectFilter}
						/>
					</>
				) : (
					<FilterClean toggleOpenFilter={toggleOpenFilter} />
				)}
			</>
		)}
	</div>
);

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
