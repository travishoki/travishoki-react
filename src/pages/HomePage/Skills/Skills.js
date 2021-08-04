import React from 'react';

import { SKILLS_LIST } from '../HomePage.data';
import { getExperienceYears } from '../HomePage.helpers';
import ListSection from '../../../components/ListSection/ListSection';

const yearsOfExperience = getExperienceYears();

const Skills = () => (
    <ListSection
		title={`${yearsOfExperience}+ Years Experience`}
		list={SKILLS_LIST}
	/>
);

export default Skills;
