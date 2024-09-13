import React, { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import classnames from 'classnames';

import { TechFilterType } from '~const/Tech.const';

import { filterProjects, createProjectsPageUrl } from './ProjectsPage.helpers';
import { NoResults } from './NoResults/NoResults';
import { Projects } from './Projects/Projects';
import { SearchForm } from './SearchForm/SearchForm';
import { ViewControl } from './ViewControl/ViewControl';
import { PROJECTS_DATA } from './ProjectsPage.data';
import { Filter } from './Filter/Filter';

import './ProjectsPage.scss';

const PROJECTS_PAGE_URL = '/projects';

export const ProjectsPage = () => {
	const { paramFilter, paramSearch } = useParams();
	const navigate = useNavigate();

	let initialFilter: TechFilterType = null;

	if (paramFilter) {
		const noFilter = paramFilter !== 'all' && paramFilter !== 'null';

		if (noFilter) {
			initialFilter = paramFilter as TechFilterType;
		}
	}

	const initialSearch = paramSearch ?? '';

	const [filter, setFilter] = useState<TechFilterType>(initialFilter);
	const [filterTerm, setFilterTerm] = useState<TechFilterType>(initialFilter);
	const [grid, setGrid] = useState(true);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState(initialSearch);

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

	const onClearFilter = () => {
		const newLocation = createProjectsPageUrl(PROJECTS_PAGE_URL);

		navigate(newLocation);

		setFilter(null);
		setFilterTerm(null);
	};

	const onClearSearchTerm = () => {
		const newLocation = createProjectsPageUrl(PROJECTS_PAGE_URL, filter);

		navigate(newLocation);

		setSearchTerm('');
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

	const projects = filterProjects(PROJECTS_DATA, filter, searchTerm);
	const showResultsCount = (filter || searchTerm) && projects.length > 0;

	return (
		<div className="projects" id="container">
			<div
				className={classnames('projects-container', {
					grid,
					list: !grid,
				})}
			>
				<h1>Projects</h1>

				<div className="find-section">
					<p className="center">
						Click on the icons below to filter my work by different technologies
					</p>

					<Filter
						filter={filter}
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
						<p className="results-count">Results: {projects.length}</p>
					)}

					<ViewControl
						grid={grid}
						isVisible={projects.length > 0}
						toggleView={toggleView}
					/>
				</div>

				<Projects grid={grid} projects={projects} />

				<NoResults
					filter={filter}
					isVisible={projects.length === 0}
					onClearFilter={onClearFilter}
					onClearSearchTerm={onClearSearchTerm}
					searchTerm={searchTerm}
				/>
			</div>
		</div>
	);
};
