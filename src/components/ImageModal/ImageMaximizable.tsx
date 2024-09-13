import React from 'react';

import { ImageModal } from '~components/ImageModal/ImageModal';
import { useImageModal } from '~components/ImageModal/useImageModal';

export const ImageMaximizable = ({ src }: ImageMaximizableProps) => {
	const { onClickImage, onCloseImage, selectedImg } = useImageModal();

	return (
		<>
			{selectedImg && <ImageModal onClose={onCloseImage} src={selectedImg} />}
			<img onClick={() => onClickImage(src)} src={src} />
		</>
	);
};

type ImageMaximizableProps = {
	src: string;
};
