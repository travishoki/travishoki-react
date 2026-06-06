import React from 'react';

type ImageDirectory = 'gallery' | 'thumbnail';

export const websiteImageSrc = (itemKey: string, directory: ImageDirectory) =>
	`${process.env.PUBLIC_URL}/images/websites/${directory}/${itemKey}.jpg`;

export const websiteGalleryImageSrc = (fileName: string) =>
	`${process.env.PUBLIC_URL}/images/websites/gallery/${fileName}`;

const fallbackSrc = (directory: ImageDirectory) =>
	`${process.env.PUBLIC_URL}/images/websites/${directory}/missing-images.jpg`;

export const handleWebsiteImageError = (directory: ImageDirectory) => {
	return (event: React.SyntheticEvent<HTMLImageElement>) => {
		const img = event.currentTarget;

		// Stop listening so a missing fallback can't retrigger this handler.
		img.onerror = null;
		img.src = fallbackSrc(directory);
	};
};
