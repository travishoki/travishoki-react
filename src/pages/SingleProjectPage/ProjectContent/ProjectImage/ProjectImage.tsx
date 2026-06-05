import React from 'react';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';
import './ProjectImage.scss';

const images = require.context('../../../../images/websites', true);

export const ProjectImage = ({ itemKey }: ProjectImageProps) => (
	<img className="project-img" src={images(`./${itemKey}/lg.jpg`)} />
);

type ProjectImageProps = {
	itemKey: ProjectType['itemKey'];
};
