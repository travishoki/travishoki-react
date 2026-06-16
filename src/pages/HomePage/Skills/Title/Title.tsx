import React from 'react';

import { CountUp } from 'src/animations/CountUp';

import { getExperienceYears } from './Title.helpers';

const yearsOfExperience = getExperienceYears();

export const Title = () => {
	return (
		<h2>
			<CountUp suffix="+" value={yearsOfExperience} /> Years Experience
		</h2>
	);
};
