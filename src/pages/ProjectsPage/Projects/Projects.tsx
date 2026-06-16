import React from 'react';

import classNames from 'classnames';

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
	const count = projects.length;

	return (
		<ul
			className={classNames(
				grid ? styles.projectsGrid : styles.projectsList,
				getResultsCountClass(count),
			)}
		>
			{projects.map((project, index) => (
				<li key={index}>
					{grid ? (
						<ProjectItemGrid
							className={getGridCountClass(count)}
							projectLink={projectLink}
							{...project}
						/>
					) : (
						<ProjectItemLine projectLink={projectLink} {...project} />
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
