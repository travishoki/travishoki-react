import React from 'react';

import {
	handleWebsiteImageError,
	websiteImageSrc,
} from '~helpers/websiteImages';

import { ProjectImageOverlay } from './ProjectImageOverlay/ProjectImageOverlay';

import styles from './ProjectImageWithPopup.module.scss';

type ProjectImageWithPopupProps = {
	companySlug: string;
	itemKey: string;
	projectLink: string;
};

export const ProjectImageWithPopup = ({
	companySlug,
	itemKey,
	projectLink,
}: ProjectImageWithPopupProps) => (
	<div className={styles.projectImageWithPopup}>
		<ProjectImageOverlay
			companySlug={companySlug}
			itemKey={itemKey}
			projectLink={projectLink}
		/>
		<img
			onError={handleWebsiteImageError('thumbnail')}
			src={websiteImageSrc(itemKey, 'thumbnail')}
		/>
	</div>
);
