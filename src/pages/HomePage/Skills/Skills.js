import React from 'react';

import { skillsList } from '../HomePage.data';
import { getExperienceYears } from '../HomePage.helpers';
import ListSection from '../../../components/ListSection/ListSection';

const yearsOfExperience = getExperienceYears();

const Skills = () => (
    <ListSection
		title={`${yearsOfExperience}+ Years Experience`}
		list={skillsList}
	/>
);

export default Skills;
