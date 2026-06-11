import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';

import { DEFAULT_IMAGE_DIMENSIONS } from '../../AboutPage.const';
import { AboutType } from '../../AboutPage.data';

import styles from './AboutImage.module.scss';

type AboutImageProps = {
	item: AboutType;
};

export const AboutImage = ({ item }: AboutImageProps) => (
	<ImageMaximizable
		alt={item.alt ?? item.title}
		className={styles.aboutItemImage}
		dimensions={DEFAULT_IMAGE_DIMENSIONS}
		imageClassName="image"
		src={item.imgSmall}
		srcLarge={item.imgLarge ?? item.imgSmall}
		srcLargeDimensions={item.imgLargeDimensions ?? DEFAULT_IMAGE_DIMENSIONS}
	/>
);
