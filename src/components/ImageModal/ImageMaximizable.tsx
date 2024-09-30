import classNames from 'classnames';
import React from 'react';

import { ImageModal } from '~components/ImageModal/ImageModal';
import { useImageModal } from '~components/ImageModal/useImageModal';

import './ImageMaximizable.scss';

export const ImageMaximizable = ({
	alt,
	className,
	src,
	srcLarge,
	srcLargeDimensions,
}: ImageMaximizableProps) => {
	const { onClickImage, onCloseImage, selectedImg } = useImageModal();

	return (
		<>
			{selectedImg && (
				<ImageModal
					onClose={onCloseImage}
					src={srcLarge ?? selectedImg}
					srcLargeDimensions={srcLargeDimensions}
				/>
			)}
			<img
				alt={alt}
				className={classNames('image-maximizable', className)}
				onClick={() => onClickImage(src)}
				src={src}
			/>
		</>
	);
};

type ImageMaximizableProps = {
	alt: string;
	className?: string;
	src: string;
	srcLarge?: string;
	srcLargeDimensions: number[];
};
