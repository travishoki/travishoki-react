import React from 'react';

import ListSection from '~components/ListSection/ListSection';

import { SKILLS_LIST } from '../HomePage.data';
import { getExperienceYears } from '../HomePage.helpers';

const yearsOfExperience = getExperienceYears();

const Skills = () => (
	<ListSection
		list={SKILLS_LIST}
		title={`${yearsOfExperience}+ Years Experience`}
	/>
);

export default Skills;
