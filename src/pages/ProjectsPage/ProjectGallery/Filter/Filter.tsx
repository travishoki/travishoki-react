import React from 'react';

import { TechFilterType } from '~const/Tech.const';

import { CurrentFilter } from './CurrentFilter';
import { FilterClean } from './FilterClean';
import { FilterItems } from './FilterItems';
import { FilterForm } from './FilterForm';

import './Filter.scss';

export const Filter = ({
	filter,
	filterTerm,
	isFilterOpen = false,
	onChangeFilter,
	onClearAndCloseFilter,
	onSelectFilter,
	toggleOpenFilter,
}: FilterProps) => (
	<div className="filter-section">
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
						<FilterItems
							filter={filter}
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
	filterTerm: TechFilterType;
	isFilterOpen?: boolean;
	onChangeFilter: React.ChangeEventHandler<HTMLInputElement>;
	onClearAndCloseFilter: () => void;
	onSelectFilter: (filter: TechFilterType) => void;
	toggleOpenFilter: () => void;
};
