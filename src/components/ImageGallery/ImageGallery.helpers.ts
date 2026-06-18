import { GalleryImage } from './types';

export const formatGalleryImage = (img: GalleryImage | string) => {
	if (typeof img === 'string') {
		return { filename: img };
	}

	return img;
};
