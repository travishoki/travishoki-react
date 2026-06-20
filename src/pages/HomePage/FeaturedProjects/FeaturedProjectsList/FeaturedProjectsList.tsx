import React from 'react';

import { PROJECTS_DATA } from '../../../ProjectsPage/ProjectsPage.data';
import {
	orderTopThreeInPodium,
	FEATURED_ITEM_KEYS,
} from '../FeaturedProjects.helpers';
import { FeaturedProjectItem } from './FeaturedProjectItem';

import styles from './FeaturedProjectsList.module.scss';

const currentProjects = orderTopThreeInPodium(
	FEATURED_ITEM_KEYS.map(
		(key) => PROJECTS_DATA.find((p) => p.itemKey === key)!,
	),
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
