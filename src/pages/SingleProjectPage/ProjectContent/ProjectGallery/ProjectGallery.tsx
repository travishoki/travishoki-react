import React, { useState } from 'react';

import {
	handleWebsiteImageError,
	websiteImageGalleryItemSrc,
} from '~helpers/websiteImages';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';
import './ProjectGallery.scss';
import classNames from 'classnames';

export const ProjectGallery = ({ itemKey, quantity }: ProjectGalleryProps) => {
	const [page, setPage] = useState(1);

	return (
		<div className="project-gallery">
			<img
				className="project-img mb-3"
				onError={handleWebsiteImageError('lg')}
				src={websiteImageGalleryItemSrc(itemKey, 'lg', page)}
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

type ProjectGalleryProps = {
	itemKey: ProjectType['itemKey'];
	quantity: number;
};
