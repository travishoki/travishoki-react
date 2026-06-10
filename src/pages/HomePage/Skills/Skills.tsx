import React from 'react';

import { getExperienceYears } from '../HomePage.helpers';
import { ListSection } from './ListSection/ListSection';
import { SKILLS_LIST } from './Skills.const';

const yearsOfExperience = getExperienceYears();

export const Skills = () => (
	<ListSection
		list={SKILLS_LIST}
		title={`${yearsOfExperience}+ Years Experience`}
	/>
);
