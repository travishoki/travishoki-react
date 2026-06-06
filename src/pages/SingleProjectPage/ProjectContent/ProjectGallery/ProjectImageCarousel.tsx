import React, { useState } from 'react';
import classNames from 'classnames';

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
				src={websiteGalleryImageSrc(gallery[page])}
			/>

			<ul>
				{gallery.map((fileName, index) => (
					<li
						key={fileName}
						className={classNames({ active: page === index })}
						onClick={() => {
							setPage(index);
						}}
					/>
				))}
			</ul>
		</div>
	);
};

type ProjectImageCarouselProps = {
	gallery: NonNullable<ProjectType['gallery']>;
};
