import React from 'react';

import classNames from 'classnames';

import { ProjectType } from '../ProjectsPage.types';
import { ProjectItem } from './ProjectItem/ProjectItem';

import styles from './ProjectList.module.scss';

export const ProjectList = ({
	grid = false,
	projectLink,
	projects = [],
}: ProjectListProps) => {
	if (projects.length === 0) return null;

	return (
		<ul
			className={classNames(
				styles.projects,
				grid ? styles.projectsGrid : styles.projectsList,
			)}
		>
			{projects.map((project, index) => (
				<ProjectItem
					key={index}
					grid={grid}
					project={project}
					projectLink={projectLink}
				/>
			))}
		</ul>
	);
};

type ProjectListProps = {
	grid: boolean;
	projectLink: string;
	projects: ProjectType[];
};
