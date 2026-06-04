import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import { AboutType } from './AboutPage.data';
import { DEFAULT_IMAGE_SIZE } from './AboutPage.const';

type AboutImageProps = {
	item: AboutType;
};

export const AboutImage = ({ item }: AboutImageProps) => (
	<ImageMaximizable
		alt={item.alt ?? item.title}
		className="about-item-image"
		dimensions={DEFAULT_IMAGE_SIZE}
		imageClassName="image"
		src={item.imgSmall}
		srcLarge={item.imgLarge ?? item.imgSmall}
		srcLargeDimensions={item.imgLargeDimensions ?? DEFAULT_IMAGE_SIZE}
	/>
);
