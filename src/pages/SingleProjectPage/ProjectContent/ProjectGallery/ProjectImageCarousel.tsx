import React from 'react';

import { ImageGallery } from '~components/ImageGallery/ImageGallery';
import { getImgAltText } from '~helpers/images';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';

import styles from './ProjectImageCarousel.module.scss';

export const ProjectImageCarousel = ({
	company,
	gallery,
	subtitle,
}: ProjectImageCarouselProps) => {
	const imgAlt = getImgAltText(company, subtitle);

	const images = gallery.map((image) => ({
		...image,
		alt: imgAlt,
	}));

	return <ImageGallery images={images} />;
};

type ProjectImageCarouselProps = {
	company: ProjectType['company'];
	gallery: NonNullable<ProjectType['gallery']>;
	subtitle: ProjectType['subtitle'];
};
