import React from 'react';

import { ImageWithModal } from '~components/ImageModal/ImageWithModal/ImageWithModal';
import {
	handleGalleryError,
	websiteGalleryImageSrc,
} from '~helpers/websiteGallery';

export const ProjectImage = ({ alt, filename }: ProjectImageProps) => {
	return (
		<ImageWithModal
			alt={alt}
			onError={handleGalleryError}
			src={websiteGalleryImageSrc(filename)}
		/>
	);
};

type ProjectImageProps = {
	alt: string;
	filename: string;
};
