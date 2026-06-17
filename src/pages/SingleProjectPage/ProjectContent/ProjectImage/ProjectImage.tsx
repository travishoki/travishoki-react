import React from 'react';

import { ImageWithModal } from '~components/ImageModal/ImageWithModal/ImageWithModal';

export const ProjectImage = ({ alt, filename }: ProjectImageProps) => {
	return <ImageWithModal alt={alt} src={filename} />;
};

type ProjectImageProps = {
	alt: string;
	filename: string;
};
