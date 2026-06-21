import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';
import ImgKaytlinTravis from '~images/passion/fight-for-your-dreams/kaytlin-neil-and-travis-hoki.jpg';

import styles from './CoverImage.module.scss';

const SMALL_WIDTH = 1024;
const SMALL_HEIGHT = 797;

export const CoverImage = () => (
	<ImageMaximizable
		alt="Fight For Your Dreams"
		className={styles.coverImage}
		dimensions={[SMALL_WIDTH, SMALL_HEIGHT]}
		src={ImgKaytlinTravis}
	/>
);
