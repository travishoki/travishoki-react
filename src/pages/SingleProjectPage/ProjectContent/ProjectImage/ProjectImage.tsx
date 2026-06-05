import React from 'react';

import {
	handleWebsiteImageError,
	websiteImageSrc,
} from '~helpers/websiteImages';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';
import './ProjectImage.scss';

export const ProjectImage = ({ itemKey }: ProjectImageProps) => (
	<img
		className="project-img"
		onError={handleWebsiteImageError('lg')}
		src={websiteImageSrc(itemKey, 'lg')}
	/>
);

type ProjectImageProps = {
	itemKey: ProjectType['itemKey'];
};
