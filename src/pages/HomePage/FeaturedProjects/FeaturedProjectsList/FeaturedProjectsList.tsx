import React from 'react';

import { PROJECTS_DATA } from '../../../ProjectsPage/ProjectsPage.data';
import {
	orderTopThreeInPodium,
	PODIUM_COUNT,
} from '../FeaturedProjects.helpers';
import { FeaturedProjectItem } from './FeaturedProjectItem';

import styles from './FeaturedProjectsList.module.scss';

const currentProjects = orderTopThreeInPodium(
	PROJECTS_DATA.slice(0, PODIUM_COUNT),
);

export const FeaturedProjectsList = () => (
	<ul className={styles.featuredProjectsList}>
		{currentProjects.map((project, index) => (
			<FeaturedProjectItem
				key={project.itemKey}
				index={index}
				project={project}
			/>
		))}
	</ul>
);
