import React from 'react';

import imgGearUp from '~images/education/gear-up.jpg';

import './Scholarships.scss';

export const Scholarships = () => (
	<div className="scholarships">
		<img src={imgGearUp} />{' '}
		<p className="scholarship-description">
			Recepient of the{' '}
			<a
				href="https://www.uvu.edu/gear-up/index.html"
				rel="noreferrer"
				target="_blank"
			>
				Gear Up
			</a>{' '}
			scholarship.
		</p>
	</div>
);
