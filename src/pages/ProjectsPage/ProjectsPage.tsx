import React from 'react';

import classnames from 'classnames';

import { Finder } from './Finder/Finder';
import { NoResults } from './NoResults/NoResults';
import { Projects } from './Projects/Projects';
import { FILTER_LIST } from './ProjectsPage.const';
import { ViewControl } from './ViewControl/ViewControl';
import { useProjectFiltering } from './hooks/useProjectFiltering';

import './ProjectsPage.scss';

const projectLink = '/project';

export const ProjectsPage = () => {
	const {
		filter,
		filterTerm,
		grid,
		onClearFilter,
		onClearSearchTerm,
		projects,
		searchTerm,
		setFilter,
		setFilterTerm,
		setGrid,
		setSearchTerm,
	} = useProjectFiltering();

	return (
		<div className="projects" id="container">
			<h1>Projects</h1>
			<div
				className={classnames('projects-container', {
					grid,
					list: !grid,
				})}
			>
				<Finder
					filter={filter}
					filterList={FILTER_LIST}
					filterTerm={filterTerm}
					onClearFilter={onClearFilter}
					onClearSearchTerm={onClearSearchTerm}
					projectsLength={projects.length}
					searchTerm={searchTerm}
					setFilter={setFilter}
					setFilterTerm={setFilterTerm}
					setSearchTerm={setSearchTerm}
				/>

				{projects.length > 0 && (
					<ViewControl grid={grid} toggleView={() => setGrid(!grid)} />
				)}

				{projects.length === 0 && (
					<Projects grid={grid} projectLink={projectLink} projects={projects} />
				)}

				{projects.length === 0 && (
					<NoResults
						filter={filter}
						onClearFilter={onClearFilter}
						onClearSearchTerm={onClearSearchTerm}
						searchTerm={searchTerm}
					/>
				)}
			</div>
		</div>
	);
};
