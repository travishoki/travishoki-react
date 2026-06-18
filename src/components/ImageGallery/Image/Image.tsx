import React from 'react';

import { OverlayWithIcon } from '~components/OverlayWithIcon/OverlayWithIcon';

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
		<div className={styles.imageWrapper}>
			<OverlayWithIcon onClick={() => setModalOpen(true)} />
			<img alt={alt} className={styles.image} onLoad={onLoad} src={filename} />
		</div>
	);
};

type ImageProps = {
	image: GalleryImage;
	setDimensions: (size: number[]) => void;
	setModalOpen: (isOpen: boolean) => void;
};
