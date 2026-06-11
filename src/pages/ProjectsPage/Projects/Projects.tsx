import React from 'react';

import { getResultsCountClass } from './Projects.helpers';
import { ProjectItemGrid } from '../ProjectItemGrid/ProjectItemGrid';
import { ProjectItemLine } from '../ProjectItemLine/ProjectItemLine';
import { ProjectType } from '../ProjectsPage.types';

import styles from './Projects.module.scss';

export const Projects = ({
	grid = false,
	projectLink,
	projects = [],
}: ProjectsProps) => {
	if (grid) {
		const resultsCountClass = getResultsCountClass(projects.length);

		return (
			<ul className={`${styles.projectsGrid} ${resultsCountClass}`}>
				{projects.map((project, index) => (
					<li key={index}>
						<ProjectItemGrid projectLink={projectLink} {...project} />
					</li>
				))}
			</ul>
		);
	}

	return (
		<ul className={styles.projectsLines}>
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
