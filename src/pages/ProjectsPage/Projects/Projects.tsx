import React from 'react';

import { getResultsCountClass } from './Projects.helpers';
import { ProjectItemGrid } from '../ProjectItemGrid/ProjectItemGrid';
import { ProjectItemLine } from '../ProjectItemLine/ProjectItemLine';
import { ProjectType } from '../ProjectsPage.types';
import './Projects.scss';

export const Projects = ({
	grid = false,
	projectLink,
	projects = [],
}: ProjectsProps) => {
	if (projects.length === 0) return null;

	if (grid) {
		const resultsCountClass = getResultsCountClass(projects.length);

		return (
			<ul className={`projects-grid ${resultsCountClass}`}>
				{projects.map((project, index) => (
					<li key={index}>
						<ProjectItemGrid projectLink={projectLink} {...project} />
					</li>
				))}
			</ul>
		);
	}

	return (
		<ul className="projects-lines">
			{projects.map((project, index) => (
				<li key={index}>
					<ProjectItemLine projectLink={projectLink} {...project} />
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
