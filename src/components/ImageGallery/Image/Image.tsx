import React from 'react';

import { GalleryImage } from '../types';

import styles from './Image.module.scss';

export const Image = ({ image, setDimensions, setModalOpen }: ImageProps) => {
	const { alt, filename } = image;

	const onLoad = (event: React.SyntheticEvent<HTMLImageElement>) =>
		setDimensions([
			event.currentTarget.naturalWidth,
			event.currentTarget.naturalHeight,
		]);

	return (
		<img
			alt={alt}
			className={styles.image}
			onClick={() => setModalOpen(true)}
			onLoad={onLoad}
			src={filename}
		/>
	);
};

type ImageProps = {
	image: GalleryImage;
	setDimensions: (size: number[]) => void;
	setModalOpen: (isOpen: boolean) => void;
};
