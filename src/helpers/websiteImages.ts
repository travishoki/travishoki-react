import React from 'react';

type ImageSize = 'lg' | 'sm';

export const websiteImageSrc = (itemKey: string, size: ImageSize) =>
	`${process.env.PUBLIC_URL}/images/websites/${itemKey}-${size}.jpg`;

export const websiteImageGalleryItemSrc = (
	itemKey: string,
	size: ImageSize,
	num: number,
) => `${process.env.PUBLIC_URL}/images/websites/${itemKey}-${size}-${num}.jpg`;

const fallbackSrc = (size: ImageSize) =>
	`${process.env.PUBLIC_URL}/images/websites/missing-images-${size}.jpg`;

export const handleWebsiteImageError =
	(size: ImageSize) => (event: React.SyntheticEvent<HTMLImageElement>) => {
		const img = event.currentTarget;

		// Stop listening so a missing fallback can't retrigger this handler.
		img.onerror = null;
		img.src = fallbackSrc(size);
	};
