import React from 'react';

import { ImageModal } from '~components/ImageModal/ImageModal';
import { useImageModal } from '~components/ImageModal/useImageModal';

import './ImageMaximizable.scss';
import classNames from 'classnames';

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
		<div className={classNames('image-maximizable', className)}>
			{selectedImg && (
				<ImageModal
					dimensions={srcLargeDimensions ?? dimensions}
					onClose={onCloseImage}
					src={srcLarge ?? selectedImg}
				/>
			)}

			<div className="zoom-overlay" onClick={() => onClickImage(src)}>
				<i className="fa fa-search-plus" />
			</div>

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
