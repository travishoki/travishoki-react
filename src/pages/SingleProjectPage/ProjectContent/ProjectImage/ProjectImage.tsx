import React from 'react';

import { ImageWithModal } from '~components/ImageModal/ImageWithModal/ImageWithModal';
import {
	handleWebsiteImageError,
	websiteImageSrc,
} from '~helpers/websiteImages';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';

export const ProjectImage = ({ itemKey }: ProjectImageProps) => (
	<ImageWithModal
		className="projectImg"
		onError={handleWebsiteImageError('gallery')}
		src={websiteImageSrc(itemKey, 'gallery')}
	/>
);

type ProjectImageProps = {
	itemKey: ProjectType['itemKey'];
};
