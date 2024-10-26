import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import imgDiplomaSmall from '~images/education/travis-hoki-diploma-small.jpg';
import imgDiploma from '~images/education/travis-hoki-diploma.jpg';
import './Diploma.scss';

export const Diploma = () => (
	<section className="gray">
		<div className="diploma-container">
			<ImageMaximizable
				alt="UVU Diploma"
				dimensions={[600, 464]}
				src={imgDiplomaSmall}
				srcLarge={imgDiploma}
				srcLargeDimensions={[2178, 1684]}
			/>
		</div>
	</section>
);
