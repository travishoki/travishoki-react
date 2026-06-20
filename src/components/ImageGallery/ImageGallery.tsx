import React, { useState } from 'react';

import { CarouselDots } from '~components/CarouselDots/CarouselDots';
import { ImageModal } from '~components/ImageModal/ImageModal/ImageModal';

import { Image } from './Image/Image';
import { GalleryImage } from './types';

import styles from './ImageGallery.module.scss';

export const ImageGallery = ({ images, square = true }: ImageGalleryProps) => {
	const [page, setPage] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const [dimensions, setDimensions] = useState<number[]>([0, 0]);

	const goToPage = (index: number) =>
		setPage((index + images.length) % images.length);

	const image = images[page];
	const { alt, caption, filename } = image;

	return (
		<div className={styles.gallery}>
			{modalOpen && (
				<ImageModal
					alt={alt}
					caption={caption}
					dimensions={dimensions}
					onClose={() => setModalOpen(false)}
					onNext={() => goToPage(page + 1)}
					onPrev={() => goToPage(page - 1)}
					src={filename}
				/>
			)}

			<Image
				image={image}
				setDimensions={setDimensions}
				setModalOpen={setModalOpen}
				square={square}
			/>

			<CarouselDots
				activeIndex={page}
				count={images.length}
				onSelect={setPage}
			/>
		</div>
	);
};

type ImageGalleryProps = {
	images: GalleryImage[];
	square?: boolean;
};
