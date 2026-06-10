import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';

import './AboutImage.scss';
import { DEFAULT_IMAGE_DIMENSIONS } from '../../AboutPage.const';
import { AboutType } from '../../AboutPage.data';

type AboutImageProps = {
	item: AboutType;
};

export const AboutImage = ({ item }: AboutImageProps) => (
	<ImageMaximizable
		alt={item.alt ?? item.title}
		className="about-item-image"
		dimensions={DEFAULT_IMAGE_DIMENSIONS}
		imageClassName="image"
		src={item.imgSmall}
		srcLarge={item.imgLarge ?? item.imgSmall}
		srcLargeDimensions={item.imgLargeDimensions ?? DEFAULT_IMAGE_DIMENSIONS}
	/>
);
