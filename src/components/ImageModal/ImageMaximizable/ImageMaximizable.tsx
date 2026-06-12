import React from 'react';

import classNames from 'classnames';

import { ImageModal } from '~components/ImageModal/ImageModal/ImageModal';
import { useImageModal } from '~components/ImageModal/useImageModal';

import { ZoomOverlay } from './ZoomOverlay/ZoomOverlay';

import styles from './ImageMaximizable.module.scss';

export const ImageMaximizable = ({
	alt,
	className,
	dimensions,
	imageClassName,
	src,
	srcLarge,
	srcLargeDimensions,
}: ImageMaximizableProps) => {
	const { onClickImage, onCloseImage, selectedImg } = useImageModal();

	const height = dimensions[1];
	const width = dimensions[0];

	return (
		<div className={classNames(styles.imageMaximizable, className)}>
			{selectedImg && (
				<ImageModal
					dimensions={srcLargeDimensions ?? dimensions}
					onClose={onCloseImage}
					src={srcLarge ?? selectedImg}
				/>
			)}

			<ZoomOverlay onClick={() => onClickImage(src)} />

			<img
				alt={alt}
				className={imageClassName}
				height={height}
				src={src}
				width={width}
			/>
		</div>
	);
};

type ImageMaximizableProps = {
	alt: string;
	className?: string;
	dimensions: number[];
	imageClassName?: string;
	src: string;
	srcLarge?: string;
	srcLargeDimensions?: number[];
};
