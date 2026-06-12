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
	<ul className={styles['recent-projects-list']}>
		{currentProjects.map((project, index) => (
			<li key={index}>
				<Link to={`/project/${project.itemKey}`}>
					<div className={styles['project-header']}>
						<div className={styles['project-header-inner']}>
							<h3>{project.company}</h3>
							<h4>{project.subtitle}</h4>
						</div>
					</div>
					<img
						className="project-img"
						onError={handleWebsiteImageError('thumbnail')}
						src={websiteImageSrc(project.itemKey, 'thumbnail')}
					/>
				</Link>
			</li>
		))}
	</ul>
);
