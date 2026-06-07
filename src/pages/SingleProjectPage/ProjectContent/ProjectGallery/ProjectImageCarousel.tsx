import React, { useState } from 'react';

import { CarouselDots } from '~components/CarouselDots/CarouselDots';
import {
	handleWebsiteImageError,
	websiteGalleryImageSrc,
} from '~helpers/websiteImages';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';
import './ProjectImageCarousel.scss';

export const ProjectImageCarousel = ({
	gallery,
}: ProjectImageCarouselProps) => {
	const [page, setPage] = useState(0);

	return (
		<div className="project-image-carousel">
			<img
				className="project-img mb-3"
				onError={handleWebsiteImageError('gallery')}
				src={websiteGalleryImageSrc(gallery[page].filename)}
			/>

			<CarouselDots
				activeIndex={page}
				count={gallery.length}
				onSelect={setPage}
			/>
		</div>
	);
};

type ProjectImageCarouselProps = {
	gallery: NonNullable<ProjectType['gallery']>;
};
