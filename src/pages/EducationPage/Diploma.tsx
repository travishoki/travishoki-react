import React from 'react';

import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable';
import imgDiplomaSmall from '~images/education/travis-hoki-diploma-small.jpg';
import imgDiploma from '~images/education/travis-hoki-diploma.jpg';

export const Diploma = () => (
	<section className="gray">
		<ImageMaximizable
			alt="High School Graduation"
			className="center picture"
			src={imgDiplomaSmall}
			srcLarge={imgDiploma}
			srcLargeDimensions={[2178, 1684]}
		/>
	</section>
);
