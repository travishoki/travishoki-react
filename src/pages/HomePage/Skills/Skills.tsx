import React from 'react';

import { ListSection } from '~components/ListSection/ListSection';

import { getExperienceYears } from '../HomePage.helpers';
import { SKILLS_LIST } from './Skills.const';

const yearsOfExperience = getExperienceYears();

export const Skills = () => (
	<ListSection
		list={SKILLS_LIST}
		title={`${yearsOfExperience}+ Years Experience`}
	/>
);
