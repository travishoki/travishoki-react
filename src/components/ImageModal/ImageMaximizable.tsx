import React from 'react';

import { ImageModal } from '~components/ImageModal/ImageModal';
import { useImageModal } from '~components/ImageModal/useImageModal';

export const ImageMaximizable = ({ className, src }: ImageMaximizableProps) => {
	const { onClickImage, onCloseImage, selectedImg } = useImageModal();

	return (
		<>
			{selectedImg && <ImageModal onClose={onCloseImage} src={selectedImg} />}
			<img className={className} onClick={() => onClickImage(src)} src={src} />
		</>
	);
};

type ImageMaximizableProps = {
	className?: string;
	src: string;
};
