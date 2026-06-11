import React from 'react';

import { TechFilterType, TechKey } from '~const/Tech.const';

import { CurrentFilter } from './CurrentFilter';
import { FilterClean } from './FilterClean';
import { FilterForm } from './FilterForm';
import { FilterItems } from './FilterItems';

import styles from './Filter.module.scss';

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
	<div className={styles.filterSection}>
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
