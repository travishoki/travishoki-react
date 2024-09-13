import { useState } from 'react';

export const useImageModal = () => {
	const [selectedImg, setSelectedImg] = useState<string | null>(null);

	const onClickImage = (src: string) => {
		setSelectedImg(src);
	};

	const onCloseImage = () => {
		setSelectedImg(null);
	};

	return { onClickImage, onCloseImage, selectedImg };
};
