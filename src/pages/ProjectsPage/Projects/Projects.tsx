import React, { useLayoutEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import { MAX_ITEM_WIDTH } from './Projects.const';
import { clamp, getExpandedStyle } from './Projects.helpers';
import { ProjectItem } from '../ProjectItem/ProjectItem';
import { ProjectType } from '../ProjectsPage.types';

import styles from './Projects.module.scss';

export const Projects = ({
	grid = false,
	projectLink,
	projects = [],
}: ProjectsProps) => {
	const count = projects.length;

	const ulRef = useRef(null);

	const [columns, setColumns] = useState(1);

	useLayoutEffect(() => {
		if (!ulRef.current) return;

		const { clientWidth } = ulRef.current;

		const newColumns = clamp(Math.floor(clientWidth / MAX_ITEM_WIDTH));
		setColumns(newColumns);
	}, []);

	if (count === 0) return 0;

	return (
		<ul
			className={classNames(
				styles.projects,
				grid ? styles.projectsGrid : styles.projectsList,
				grid ? getExpandedStyle(columns) : '',
			)}
			ref={ulRef}
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

type ProjectsProps = {
	grid: boolean;
	projectLink: string;
	projects: ProjectType[];
};
