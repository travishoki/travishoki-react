import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { SearchForm } from './SearchForm/SearchForm';
import { ViewControl } from './ViewControl/ViewControl';
import { Filter } from './Filter/Filter';
import { TechFilterType, TechKeys } from '~const/Tech.const';
import { createProjectsPageUrl } from '../ProjectsPage.helpers';

const PROJECTS_PAGE_URL = '/projects';

export const Finder = ({
	filter,
	filterList,
	filterTerm,
	grid,
	onClearFilter,
	onClearSearchTerm,
	projectsLength,
	searchTerm,
	setFilter,
	setFilterTerm,
	setGrid,
	setSearchTerm,
}: FinderProps) => {
	const navigate = useNavigate();

	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleView = () => {
		setGrid(!grid);
	};

	const onSelectFilter = (filterProp: TechFilterType) => {
		const newFilter = filter === filterProp ? null : filterProp;
		const newLocation = createProjectsPageUrl(
			PROJECTS_PAGE_URL,
			newFilter,
			searchTerm,
		);

		navigate(newLocation);

		setFilter(newFilter);
		setFilterTerm(newFilter);
	};

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = e.currentTarget.value;

		const newLocation = createProjectsPageUrl(
			PROJECTS_PAGE_URL,
			filter,
			newSearchTerm,
		);

		navigate(newLocation);

		setSearchTerm(newSearchTerm);
	};

	const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newFilter = e.target.value as TechFilterType;
		const newLocation = createProjectsPageUrl(PROJECTS_PAGE_URL, newFilter);

		navigate(newLocation);

		setFilterTerm(newFilter);
	};

	const toggleOpenFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	const onClearAndCloseFilter = () => {
		onClearFilter();
		toggleOpenFilter();
	};

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

			<ViewControl
				grid={grid}
				isVisible={projectsLength > 0}
				toggleView={toggleView}
			/>
		</div>
	);
};

type FinderProps = {
	filter: TechFilterType;
	filterList: (keyof TechKeys)[];
	filterTerm: TechFilterType;
	grid: boolean;
	onClearFilter: () => void;
	onClearSearchTerm: () => void;
	projectsLength: number;
	searchTerm: string;
	setFilter: (filter: TechFilterType) => void;
	setFilterTerm: (filterTerm: TechFilterType) => void;
	setGrid: (grid: boolean) => void;
	setSearchTerm: (searchTerm: string) => void;
};
