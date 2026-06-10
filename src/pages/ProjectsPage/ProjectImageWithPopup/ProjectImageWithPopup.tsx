import React from 'react';

import {
	handleWebsiteImageError,
	websiteImageSrc,
} from '~helpers/websiteImages';

import { ProjectImageOverlay } from './ProjectImageOverlay/ProjectImageOverlay';

import './ProjectImageWithPopup.scss';

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
	<div className="project-image-with-popup">
		<ProjectImageOverlay
			companySlug={companySlug}
			itemKey={itemKey}
			projectLink={projectLink}
		/>
		<img
			className="project-img"
			onError={handleWebsiteImageError('thumbnail')}
			src={websiteImageSrc(itemKey, 'thumbnail')}
		/>
	</div>
);
