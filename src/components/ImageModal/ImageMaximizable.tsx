import classNames from 'classnames';
import React from 'react';

import { ImageModal } from '~components/ImageModal/ImageModal';
import { useImageModal } from '~components/ImageModal/useImageModal';

import './ImageMaximizable.scss';

export const ImageMaximizable = ({
	className,
	src,
	srcLarge,
}: ImageMaximizableProps) => {
	const { onClickImage, onCloseImage, selectedImg } = useImageModal();

	return (
		<>
			{selectedImg && (
				<ImageModal onClose={onCloseImage} src={srcLarge ?? selectedImg} />
			)}
			<img
				className={classNames('image-maximizable', className)}
				onClick={() => onClickImage(src)}
				src={src}
			/>
		</>
	);
};

type ImageMaximizableProps = {
	className?: string;
	src: string;
	srcLarge?: string;
};
