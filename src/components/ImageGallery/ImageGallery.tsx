import React, { useRef, useState } from 'react';

import { CarouselDots } from '~components/CarouselDots/CarouselDots';
import { ImageModal } from '~components/ImageModal/ImageModal/ImageModal';

import { Image } from './Image/Image';
import { GalleryImage } from './types';

import styles from './ImageGallery.module.scss';

const SWIPE_THRESHOLD = 50;

export const ImageGallery = ({ images, square = true }: ImageGalleryProps) => {
	const [page, setPage] = useState(0);
	const [modalOpen, setModalOpen] = useState(false);
	const [dimensions, setDimensions] = useState<number[]>([0, 0]);
	const pointerStartX = useRef<number | null>(null);

	const goToPage = (index: number) =>
		setPage((index + images.length) % images.length);

	const handlePointerDown = (e: React.PointerEvent) => {
		pointerStartX.current = e.clientX;
	};

	const handlePointerUp = (e: React.PointerEvent) => {
		if (pointerStartX.current === null) return;
		const delta = pointerStartX.current - e.clientX;
		if (Math.abs(delta) >= SWIPE_THRESHOLD) {
			goToPage(delta > 0 ? page + 1 : page - 1);
		}
		pointerStartX.current = null;
	};

	const image = images[page];
	const { alt, caption, filename } = image;

	return (
		<div
			className={styles.gallery}
			onPointerDown={handlePointerDown}
			onPointerUp={handlePointerUp}
		>
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
				className="mb-3"
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
