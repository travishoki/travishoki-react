import React from 'react';

import { GalleryImage } from '~components/ImageGallery/types';
import { OverlayWithIcon } from '~components/OverlayWithIcon/OverlayWithIcon';

import styles from './Image.module.scss';

export const Image = ({
	image,
	setDimensions,
	setModalOpen,
	square = true,
}: ImageProps) => {
	const { alt, filename } = image;

	const onLoad = (event: React.SyntheticEvent<HTMLImageElement>) =>
		setDimensions([
			event.currentTarget.naturalWidth,
			event.currentTarget.naturalHeight,
		]);

	return (
		<div
			className={`${styles.imageWrapper}${square ? '' : ` ${styles.imageWrapperRect}`}`}
		>
			<OverlayWithIcon onClick={() => setModalOpen(true)} />
			<img
				alt={alt}
				className={`${styles.image}${square ? '' : ` ${styles.imageRect}`}`}
				onLoad={onLoad}
				src={filename}
			/>
		</div>
	);
};

type ImageProps = {
	image: GalleryImage;
	setDimensions: (size: number[]) => void;
	setModalOpen: (isOpen: boolean) => void;
	square?: boolean;
};
