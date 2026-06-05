import React from 'react';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';
import './ProjectImage.scss';

const images = require.context('../../../../images/websites', true);

const fallbackSrc = images('./missing-images/lg.jpg');

export const ProjectImage = ({ itemKey }: ProjectImageProps) => {
	const onError = (event: React.SyntheticEvent<HTMLImageElement>) => {
		const img = event.currentTarget;

		if (img.src !== fallbackSrc) {
			img.src = fallbackSrc;
		}
	};

	return (
		<img
			className="project-img"
			onError={onError}
			src={images(`./${itemKey}/lg.jpg`)}
		/>
	);
};

type ProjectImageProps = {
	itemKey: ProjectType['itemKey'];
};
