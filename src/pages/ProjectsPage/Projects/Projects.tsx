import React from 'react';

import { getResultsCountClass } from './Projects.helpers';
import ProjectItemList from '../ProjectItemList/ProjectItemList';
import ProjectItemGrid from '../ProjectItemGrid/ProjectItemGrid';
import { ProjectType } from '../ProjectsPage.data';

const Projects = ({ grid, projects }: ProjectsProps) => {
	if (projects.length === 0) return null;

	const resultsCountClass = getResultsCountClass(projects.length);

	return (
		<ul className={`projects ${resultsCountClass}`}>
			{projects.map((project, index) => (
				<li key={index} className="project">
					{grid ? (
						<ProjectItemGrid {...project} />
					) : (
						<ProjectItemList {...project} />
					)}
				</li>
			))}
		</ul>
	);
};

type ProjectsProps = {
	grid: boolean;
	projects: ProjectType[];
};

Projects.defaultProps = {
	grid: false,
	projects: [],
};

export default Projects;
