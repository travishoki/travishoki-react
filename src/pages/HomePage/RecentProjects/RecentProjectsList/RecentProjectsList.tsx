import React from 'react';

import { PROJECTS_DATA } from '../../../ProjectsPage/ProjectsPage.data';
import { orderTopThreeInPodium, PODIUM_COUNT } from '../RecentProjects.helpers';
import { RecentProjectItem } from './RecentProjectItem';

import styles from './RecentProjectsList.module.scss';

const currentProjects = orderTopThreeInPodium(
	PROJECTS_DATA.slice(0, PODIUM_COUNT),
);

export const RecentProjectsList = () => (
	<ul className={styles.recentProjectsList}>
		{currentProjects.map((project) => (
			<RecentProjectItem key={project.itemKey} project={project} />
		))}
	</ul>
);
