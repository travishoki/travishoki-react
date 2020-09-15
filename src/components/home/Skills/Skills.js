import React from 'react';

import { skillsList } from '../HomePage.data';
import { getExperienceYears } from '../HomePage.helpers';
import ListSection from '../../common/ListSection';

const Skills = () => (
    <ListSection
		title={getExperienceYears() + "+ Years Experience"}
		list={skillsList}
	/>
);

export default Skills;
