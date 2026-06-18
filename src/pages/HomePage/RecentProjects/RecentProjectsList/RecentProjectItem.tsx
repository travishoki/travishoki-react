import React from 'react';

import { Link } from 'react-router-dom';

import { ImgPopIn } from '~animations/ImgPopIn';
import { getImgAltText } from '~helpers/images';
import {
	handleThumbnailError,
	websiteThumbnailSrc,
} from '~helpers/websiteThumbnails';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';

import styles from './RecentProjectItem.module.scss';

type RecentProjectItemProps = {
	index: number;
	project: ProjectType;
};

const DELAY_MULTIPLIER = 0.2;

export const RecentProjectItem = ({
	index,
	project,
}: RecentProjectItemProps) => {
	const { company, itemKey, subtitle } = project;
	const imgAlt = getImgAltText(company, subtitle);

	return (
		<li className={styles.recentProjectItem}>
			<Link to={`/project/${itemKey}`}>
				<div className={styles.projectHeader}>
					<div className={styles.projectHeaderInner}>
						<h3>{company}</h3>
						<h4>{subtitle}</h4>
					</div>
				</div>
				<ImgPopIn
					alt={imgAlt}
					height={250}
					onError={handleThumbnailError}
					src={websiteThumbnailSrc(itemKey)}
					transition={{
						delay: index * DELAY_MULTIPLIER,
						duration: 0.4,
						ease: 'easeInOut',
					}}
					width={250}
				/>
			</Link>
		</li>
	);
};
