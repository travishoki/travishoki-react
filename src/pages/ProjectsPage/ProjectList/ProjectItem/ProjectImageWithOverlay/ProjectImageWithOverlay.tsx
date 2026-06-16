import React from 'react';

import classNames from 'classnames';

import { getImgAltText } from '~helpers/images';
import {
	handleWebsiteImageError,
	websiteImageSrc,
} from '~helpers/websiteImages';

import { ProjectImageOverlay } from './ProjectImageOverlay/ProjectImageOverlay';

import styles from './ProjectImageWithOverlay.module.scss';

export const ProjectImageWithOverlay = ({
	className,
	company,
	companySlug,
	itemKey,
	projectLink,
	subtitle,
}: ProjectImageWithOverlayProps) => {
	const imgAlt = getImgAltText(company, subtitle);

	return (
		<div className={classNames(styles.projectImageWithPopup, className)}>
			<ProjectImageOverlay
				company={company}
				companySlug={companySlug}
				itemKey={itemKey}
				projectLink={projectLink}
			/>
			<img
				alt={imgAlt}
				className={styles.img}
				onError={handleWebsiteImageError('thumbnail')}
				src={websiteImageSrc(itemKey, 'thumbnail')}
			/>
		</div>
	);
};

type ProjectImageWithOverlayProps = {
	className?: string;
	company: string;
	companySlug: string;
	itemKey: string;
	projectLink: string;
	subtitle?: string;
};
