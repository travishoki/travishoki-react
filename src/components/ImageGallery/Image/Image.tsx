import React, { useState } from 'react';

import classNames from 'classnames';

import { GalleryImage } from '~components/ImageGallery/types';
import { ImageCaption } from '~components/ImageModal/ImageCaption/ImageCaption';
import { OverlayWithIcon } from '~components/OverlayWithIcon/OverlayWithIcon';

import styles from './Image.module.scss';

export const Image = ({
	image,
	setDimensions,
	setModalOpen,
	square = true,
}: ImageProps) => {
	const { alt, caption, filename } = image;
	const [hovered, setHovered] = useState(false);

	const onLoad = (event: React.SyntheticEvent<HTMLImageElement>) =>
		setDimensions([
			event.currentTarget.naturalWidth,
			event.currentTarget.naturalHeight,
		]);

	return (
		<div
			className={classNames(
				styles.imageWrapper,
				!square && styles.imageWrapperRect,
			)}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<OverlayWithIcon onClick={() => setModalOpen(true)} visible={hovered} />
			<img
				alt={alt}
				className={classNames(styles.image, !square && styles.imageRect)}
				onLoad={onLoad}
				src={filename}
			/>
			{caption && <ImageCaption>{caption}</ImageCaption>}
		</div>
	);
};

type ImageProps = {
	image: GalleryImage;
	setDimensions: (size: number[]) => void;
	setModalOpen: (isOpen: boolean) => void;
	square?: boolean;
};
