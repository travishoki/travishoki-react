import React from 'react';

import { Link } from 'react-router-dom';

import {
	handleWebsiteImageError,
	websiteImageSrc,
} from '~helpers/websiteImages';

import { orderTopThreeInPodium, PODIUM_COUNT } from './RecentProjects.helpers';
import { PROJECTS_DATA } from '../../ProjectsPage/ProjectsPage.data';

import styles from './RecentProjectsList.module.scss';

const currentProjects = orderTopThreeInPodium(
	PROJECTS_DATA.slice(0, PODIUM_COUNT),
);

export const RecentProjectsList = () => (
	<ul className={styles.recentProjectsList}>
		{currentProjects.map((project, index) => {
			const { company, itemKey, subtitle } = project;
			const imageAlt = subtitle ? `${company} ${subtitle}` : company;

			return (
				<li key={index}>
					<Link to={`/project/${itemKey}`}>
						<div className={styles.projectHeader}>
							<div className={styles.projectHeaderInner}>
								<h3>{company}</h3>
								<h4>{subtitle}</h4>
							</div>
						</div>
						<img
							alt={imageAlt}
							onError={handleWebsiteImageError('thumbnail')}
							src={websiteImageSrc(project.itemKey, 'thumbnail')}
						/>
					</Link>
				</li>
			);
		})}
	</ul>
);
