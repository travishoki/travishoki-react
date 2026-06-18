import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';
import ImgHokiSkateboardsSmall from '~images/passion/hoki-skateboards/hoki-skateboards-small.jpg';
import ImgHokiSkateboards from '~images/passion/hoki-skateboards/hoki-skateboards.jpg';

import styles from './CoverImage.module.scss';

const SMALL_WIDTH = 600;
const SMALL_HEIGHT = 400;

const LARGE_WIDTH = 1541;
const LARGE_HEIGHT = 1030;

export const CoverImage = () => (
	<ImageMaximizable
		alt="Hoki Skateboards"
		className={styles.coverImage}
		dimensions={[SMALL_WIDTH, SMALL_HEIGHT]}
		src={ImgHokiSkateboardsSmall}
		srcLarge={ImgHokiSkateboards}
		srcLargeDimensions={[LARGE_WIDTH, LARGE_HEIGHT]}
	/>
);
