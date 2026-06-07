import React, { useState } from 'react';

import { CarouselDots } from '~components/CarouselDots/CarouselDots';

import { APP_GALLERY_IMAGES } from './MobileAppImageGallery.data';
import './MobileAppImageGallery.scss';

const imageSrc = (filename: string) =>
	`${process.env.PUBLIC_URL}/images/app-screens/${filename}`;

export const MobileAppImageGallery = () => {
	const [page, setPage] = useState(0);

	return (
		<div className="mobile-app-image-gallery">
			<img
				alt={`Hoki Skateboards app screen ${page + 1}`}
				className="mobile-app-image-gallery-image"
				src={imageSrc(APP_GALLERY_IMAGES[page])}
			/>

			<CarouselDots
				activeIndex={page}
				count={APP_GALLERY_IMAGES.length}
				onSelect={setPage}
			/>
		</div>
	);
};
