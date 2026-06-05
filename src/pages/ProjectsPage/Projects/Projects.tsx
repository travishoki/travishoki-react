import React from 'react';

import { getResultsCountClass } from './Projects.helpers';
import { ProjectContent } from '../ProjectContent/ProjectContent';
import { ProjectItemGrid } from '../ProjectItemGrid/ProjectItemGrid';
import { ProjectType } from '../ProjectsPage.data';
import './Projects.scss';

export const Projects = ({
	grid = false,
	projectLink,
	projects = [],
}: ProjectsProps) => {
	if (projects.length === 0) return null;

	const resultsCountClass = getResultsCountClass(projects.length);

	return (
		<ul className={`projects ${resultsCountClass}`}>
			{projects.map((project, index) => (
				<li key={index}>
					{grid ? (
						<ProjectItemGrid projectLink={projectLink} {...project} />
					) : (
						<ProjectContent {...project} />
					)}
				</li>
			))}
		</ul>
	);
};

type ProjectsProps = {
	grid: boolean;
	projectLink: string;
	projects: ProjectType[];
};
