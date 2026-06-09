import React, { useState } from 'react';

import { CarouselDots } from '~components/CarouselDots/CarouselDots';
import { ImageWithModal } from '~components/ImageModal/ImageWithModal';
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
			<ImageWithModal
				alt={gallery[page].caption}
				className="project-img"
				onError={handleWebsiteImageError('gallery')}
				src={websiteGalleryImageSrc(gallery[page].filename)}
			/>

			{gallery[page].caption && (
				<p className="project-image-caption">{gallery[page].caption}</p>
			)}

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
