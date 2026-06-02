import React from 'react';

import classnames from 'classnames';

import { FILTER_LIST } from './ProjectsPage.data';
import { Finder } from './Finder/Finder';
import { Projects } from './Projects/Projects';
import { NoResults } from './NoResults/NoResults';
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
			<div
				className={classnames('projects-container', {
					grid,
					list: !grid,
				})}
			>
				<h1>Projects</h1>

				<Finder
					filter={filter}
					filterList={FILTER_LIST}
					filterTerm={filterTerm}
					grid={grid}
					onClearFilter={onClearFilter}
					onClearSearchTerm={onClearSearchTerm}
					projectsLength={projects.length}
					searchTerm={searchTerm}
					setFilter={setFilter}
					setFilterTerm={setFilterTerm}
					setGrid={setGrid}
					setSearchTerm={setSearchTerm}
				/>
				<Projects grid={grid} projectLink={projectLink} projects={projects} />

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
