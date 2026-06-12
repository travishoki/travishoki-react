import React from 'react';

import { getGridCountClass, getResultsCountClass } from './Projects.helpers';
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
		const count = projects.length;

		return (
			<ul className={`${styles.projectsGrid} ${getResultsCountClass(count)}`}>
				{projects.map((project, index) => (
					<li key={index}>
						<ProjectItemGrid
							className={getGridCountClass(count)}
							projectLink={projectLink}
							{...project}
						/>
					</li>
				))}
			</ul>
		);
	}

	return (
		<ul className={styles.projectsList}>
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
