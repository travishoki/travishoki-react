import React from 'react';

import { Link } from 'react-router-dom';

import { ImgPopIn } from '~animations/ImgPopIn';
import { getImgAltText } from '~helpers/images';
import { bisect } from '~helpers/numbers';
import {
	handleThumbnailError,
	websiteThumbnailSrc,
} from '~helpers/websiteThumbnails';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';
import { PODIUM_COUNT } from '../FeaturedProjects.helpers';

import styles from './FeaturedProjectItem.module.scss';

type FeaturedProjectItemProps = {
	index: number;
	project: ProjectType;
};

const DELAY_MULTIPLIER = 0.2;

export const FeaturedProjectItem = ({
	index,
	project,
}: FeaturedProjectItemProps) => {
	const { company, itemKey, subtitle } = project;
	const imgAlt = getImgAltText(company, subtitle);
	const center = bisect(PODIUM_COUNT - 1);
	const delay = Math.abs(index - center) * DELAY_MULTIPLIER;

	return (
		<li className={styles.featuredProjectItem}>
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
						delay,
						duration: 0.4,
						ease: 'easeInOut',
					}}
					width={250}
				/>
			</Link>
		</li>
	);
};
