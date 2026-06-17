import React, { useState } from 'react';

import { CarouselDots } from '~components/CarouselDots/CarouselDots';
import { ImageModal } from '~components/ImageModal/ImageModal/ImageModal';

import { GalleryImage } from './types';

import styles from './ImageGallery.module.scss';

export const ImageGallery = ({ images }: ImageGalleryProps) => {
	const [page, setPage] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const [dimensions, setDimensions] = useState<number[]>([0, 0]);

	const goToPage = (index: number) =>
		setPage((index + images.length) % images.length);

	const { alt, caption, filename } = images[page];

	return (
		<div className={styles.gallery}>
			{modalOpen && (
				<ImageModal
					alt={alt}
					dimensions={dimensions}
					onClose={() => setModalOpen(false)}
					onNext={() => goToPage(page + 1)}
					onPrev={() => goToPage(page - 1)}
					src={filename}
				/>
			)}

			<img
				alt={alt}
				className={styles.image}
				onClick={() => setModalOpen(true)}
				onLoad={(event) =>
					setDimensions([
						event.currentTarget.naturalWidth,
						event.currentTarget.naturalHeight,
					])
				}
				src={filename}
			/>

			{caption && <p className={styles.projectImageCaption}>{caption}</p>}

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
};
