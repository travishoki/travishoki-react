import React from 'react';

import {
	handleWebsiteImageError,
	websiteImageSrc,
} from '~helpers/websiteImages';

import { ProjectImageOverlay } from './ProjectImageOverlay/ProjectImageOverlay';

import styles from './ProjectImageWithPopup.module.scss';

export const ProjectImageWithPopup = ({
	company,
	companySlug,
	itemKey,
	projectLink,
	subtitle,
}: ProjectImageWithPopupProps) => {
	const imageAlt = subtitle ? `${company} ${subtitle}` : company;

	return (
		<div className={styles.projectImageWithPopup}>
			<ProjectImageOverlay
				company={company}
				companySlug={companySlug}
				itemKey={itemKey}
				projectLink={projectLink}
			/>
			<img
				alt={imageAlt}
				onError={handleWebsiteImageError('thumbnail')}
				src={websiteImageSrc(itemKey, 'thumbnail')}
			/>
		</div>
	);
};

type ProjectImageWithPopupProps = {
	company: string;
	companySlug: string;
	itemKey: string;
	projectLink: string;
	subtitle?: string;
};
