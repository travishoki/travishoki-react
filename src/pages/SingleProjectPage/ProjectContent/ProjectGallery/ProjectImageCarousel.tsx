import React, { useState } from 'react';
import classNames from 'classnames';

import {
	handleWebsiteImageError,
	websiteImageGalleryItemSrc,
} from '~helpers/websiteImages';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';
import './ProjectImageCarousel.scss';

export const ProjectImageCarousel = ({
	itemKey,
	quantity,
}: ProjectImageCarouselProps) => {
	const [page, setPage] = useState(1);

	return (
		<div className="project-image-carousel">
			<img
				className="project-img mb-3"
				onError={handleWebsiteImageError('gallery')}
				src={websiteImageGalleryItemSrc(itemKey, 'gallery', page)}
			/>

			<ul>
				{Array.from({ length: quantity }, (_, index) => (
					<li
						key={index}
						className={classNames({ active: page === index + 1 })}
						onClick={() => {
							setPage(index + 1);
						}}
					/>
				))}
			</ul>
		</div>
	);
};

type ProjectImageCarouselProps = {
	itemKey: ProjectType['itemKey'];
	quantity: number;
};
