import React, { useLayoutEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import { cap } from '~helpers/numbers';

import { ProjectItem } from './ProjectItem/ProjectItem';
import { MAX_COLUMNS, MAX_ITEM_WIDTH } from './ProjectList.const';
import { getExpandedStyle } from './ProjectList.helpers';
import { ProjectType } from '../ProjectsPage.types';

import styles from './ProjectList.module.scss';

export const ProjectList = ({
	grid = false,
	projectLink,
	projects = [],
}: ProjectListProps) => {
	const count = projects.length;

	const ulRef = useRef(null);

	const [columns, setColumns] = useState(1);

	useLayoutEffect(() => {
		if (!ulRef.current) return;

		const { clientWidth } = ulRef.current;

		const newColumns = cap(
			Math.floor(clientWidth / MAX_ITEM_WIDTH),
			MAX_COLUMNS,
		);
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

type ProjectListProps = {
	grid: boolean;
	projectLink: string;
	projects: ProjectType[];
};
