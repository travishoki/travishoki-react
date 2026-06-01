import React from 'react';

import { Education } from '~components/Education/Education';

import { Banner } from './Banner/Banner';
import { Projects } from './Projects/Projects';
import { Skills } from './Skills/Skills';
import { TechTiles } from './TechTiles/TechTiles';
import { CurrentTechInterests } from './CurrentTechInterests/CurrentTechInterests';
import { Volunteer } from './Volunteer/Volunteer';

import './HomePage.scss';

export const HomePage = () => (
	<div className="home" id="container">
		<Banner />
		<TechTiles />
		<Projects />
		<Skills />
		<CurrentTechInterests />
		<Education />
		<Volunteer />
	</div>
);
