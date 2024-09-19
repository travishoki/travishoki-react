import React from 'react';

import imgDiplomaSmall from '~images/education/travis-hoki-diploma-small.jpg';
import imgDiploma from '~images/education/travis-hoki-diploma.jpg';

export const Diploma = () => (
	<section className="gray">
		<a href={imgDiploma} rel="noreferrer" target="_blank">
			<img className="center picture" src={imgDiplomaSmall} />
		</a>
	</section>
);
