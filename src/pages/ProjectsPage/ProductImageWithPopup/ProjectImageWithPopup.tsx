import React from 'react';

import { ProjectImageOverlay } from './ProjectImageOverlay/ProjectImageOverlay';
import './ProjectImageWithPopup.scss';

type ProjectImageWithPopupProps = {
	companySlug: string;
	itemKey: string;
	projectLink: string;
};

const images = require.context('../../../images/websites', true);

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
		<img className="project-img" src={images(`./${itemKey}/sm.jpg`)} />
	</div>
);
