import React, { useState } from 'react';

import { CarouselDots } from '~components/CarouselDots/CarouselDots';
import { ImageModal } from '~components/ImageModal/ImageModal/ImageModal';

import { APP_GALLERY_IMAGES } from './MobileAppImageGallery.data';

import './MobileAppImageGallery.scss';

const imageSrc = (filename: string) =>
	`${process.env.PUBLIC_URL}/images/websites/gallery/${filename}`;

export const MobileAppImageGallery = () => {
	const [page, setPage] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const [dimensions, setDimensions] = useState<number[]>([0, 0]);

	const goToPage = (index: number) =>
		setPage((index + APP_GALLERY_IMAGES.length) % APP_GALLERY_IMAGES.length);

	const currentSrc = imageSrc(APP_GALLERY_IMAGES[page]);

	return (
		<div className="mobile-app-image-gallery">
			{modalOpen && (
				<ImageModal
					dimensions={dimensions}
					onClose={() => setModalOpen(false)}
					onNext={() => goToPage(page + 1)}
					onPrev={() => goToPage(page - 1)}
					src={currentSrc}
				/>
			)}

			<img
				alt={`Hoki Skateboards app screen ${page + 1}`}
				className="mobile-app-image-gallery-image"
				onClick={() => setModalOpen(true)}
				onLoad={(event) =>
					setDimensions([
						event.currentTarget.naturalWidth,
						event.currentTarget.naturalHeight,
					])
				}
				src={currentSrc}
			/>

			<CarouselDots
				activeIndex={page}
				count={APP_GALLERY_IMAGES.length}
				onSelect={setPage}
			/>
		</div>
	);
};
