import React from 'react';

import { Link } from 'react-router-dom';

import { getImgAltText } from '~helpers/images';
import {
	handleThumbnailError,
	websiteThumbnailSrc,
} from '~helpers/websiteThumbnails';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';

import styles from './RecentProjectItem.module.scss';

type RecentProjectItemProps = {
	project: ProjectType;
};

export const RecentProjectItem = ({ project }: RecentProjectItemProps) => {
	const { company, itemKey, subtitle } = project;
	const imgAlt = getImgAltText(company, subtitle);

	return (
		<li key={itemKey} className={styles.recentProjectItem}>
			<Link to={`/project/${itemKey}`}>
				<div className={styles.projectHeader}>
					<div className={styles.projectHeaderInner}>
						<h3>{company}</h3>
						<h4>{subtitle}</h4>
					</div>
				</div>
				<img
					alt={imgAlt}
					height={250}
					onError={handleThumbnailError}
					src={websiteThumbnailSrc(itemKey)}
					width={250}
				/>
			</Link>
		</li>
	);
};
