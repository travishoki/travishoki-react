import React from 'react';

import {
	handleWebsiteImageError,
	websiteImageSrc,
} from '~helpers/websiteImages';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';

export const ProjectImage = ({ itemKey }: ProjectImageProps) => {
	return (
		<img
			className="project-img"
			onError={handleWebsiteImageError('gallery')}
			src={websiteImageSrc(itemKey, 'gallery')}
		/>
	);
};

type ProjectImageProps = {
	itemKey: ProjectType['itemKey'];
};
