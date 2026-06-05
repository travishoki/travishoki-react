import React from 'react';

import classnames from 'classnames';

import { FILTER_LIST } from './ProjectsPage.const';
import { Finder } from './Finder/Finder';
import { ViewControl } from './ViewControl/ViewControl';
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

				<ViewControl
					grid={grid}
					isVisible={projects.length > 0}
					toggleView={() => setGrid(!grid)}
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
