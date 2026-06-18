import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';
import ImgDiplomaSmall from '~images/education/travis-hoki-diploma-small.jpg';
import ImgDiploma from '~images/education/travis-hoki-diploma.jpg';

import styles from './Diploma.module.scss';

const SMALL_WIDTH = 600;
const SMALL_HEIGHT = 400;

const LARGE_WIDTH = 2178;
const LARGE_HEIGHT = 1684;

export const Diploma = () => (
	<section className="gray-three">
		<div className={styles.diplomaContainer}>
			<ImageMaximizable
				alt="UVU Diploma"
				dimensions={[SMALL_WIDTH, SMALL_HEIGHT]}
				src={ImgDiplomaSmall}
				srcLarge={ImgDiploma}
				srcLargeDimensions={[LARGE_WIDTH, LARGE_HEIGHT]}
			/>
		</div>
	</section>
);
