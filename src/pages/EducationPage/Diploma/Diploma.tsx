import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';
import imgDiplomaSmall from '~images/education/travis-hoki-diploma-small.jpg';
import imgDiploma from '~images/education/travis-hoki-diploma.jpg';

import './Diploma.scss';

const SMALL_WIDTH = 600;
const SMALL_HEIGHT = 400;

const LARGE_WIDTH = 2178;
const LARGE_HEIGHT = 1684;

export const Diploma = () => (
	<section className="gray">
		<div className="diploma-container">
			<ImageMaximizable
				alt="UVU Diploma"
				dimensions={[SMALL_WIDTH, SMALL_HEIGHT]}
				src={imgDiplomaSmall}
				srcLarge={imgDiploma}
				srcLargeDimensions={[LARGE_WIDTH, LARGE_HEIGHT]}
			/>
		</div>
	</section>
);
