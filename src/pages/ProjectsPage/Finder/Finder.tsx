import React from 'react';

import { TechFilterType, TechKey } from '~const/Tech.const';

import { Filter } from './Filter/Filter';
import { SearchForm } from './SearchForm/SearchForm';
import { useFinderHandlers } from './hooks/useFinderHandlers';
import './Finder.scss';

export const Finder = ({
	filter,
	filterList,
	filterTerm,
	onClearFilter,
	onClearSearchTerm,
	projectsLength,
	searchTerm,
	setFilter,
	setFilterTerm,
	setSearchTerm,
}: FinderProps) => {
	const {
		isFilterOpen,
		onChangeFilter,
		onChangeSearch,
		onClearAndCloseFilter,
		onSelectFilter,
		toggleOpenFilter,
	} = useFinderHandlers({
		filter,
		onClearFilter,
		searchTerm,
		setFilter,
		setFilterTerm,
		setSearchTerm,
	});

	const showResultsCount = (filter || searchTerm) && projectsLength > 0;

	return (
		<div className="find-section">
			<p className="center">
				Click on the icons below to filter my work by different technologies
			</p>

			<Filter
				filter={filter}
				filterList={filterList}
				filterTerm={filterTerm}
				isFilterOpen={isFilterOpen}
				onChangeFilter={onChangeFilter}
				onClearAndCloseFilter={onClearAndCloseFilter}
				onSelectFilter={onSelectFilter}
				toggleOpenFilter={toggleOpenFilter}
			/>

			<div className="clearfix" />

			<SearchForm
				onChangeSearch={onChangeSearch}
				onClearSearchTerm={onClearSearchTerm}
				searchTerm={searchTerm}
			/>

			{showResultsCount && (
				<p className="results-count">Results: {projectsLength}</p>
			)}
		</div>
	);
};

type FinderProps = {
	filter: TechFilterType;
	filterList: TechKey[];
	filterTerm: TechFilterType;
	onClearFilter: () => void;
	onClearSearchTerm: () => void;
	projectsLength: number;
	searchTerm: string;
	setFilter: (filter: TechFilterType) => void;
	setFilterTerm: (filterTerm: TechFilterType) => void;
	setSearchTerm: (searchTerm: string) => void;
};
