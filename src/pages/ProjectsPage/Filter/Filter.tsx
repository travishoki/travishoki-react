import React from 'react';

import CurrentFilter from './CurrentFilter';
import FilterClean from './FilterClean';
import FilterItems from './FilterItems';
import FilterForm from './FilterForm';

const Filter = ({
	filter,
	filterTerm,
	isFilterOpen,
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
	filter: string | null;
	filterTerm: string | null;
	isFilterOpen: boolean;
	onChangeFilter: React.ChangeEventHandler<HTMLInputElement>;
	onClearAndCloseFilter: () => void;
	onSelectFilter: (filter: string) => void;
	toggleOpenFilter: () => void;
};

Filter.defaultProps = {
	isFilterOpen: false,
};

export default Filter;
