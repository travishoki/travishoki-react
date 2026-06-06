import React from 'react';

import { Education } from '~components/Education/Education';

import { Banner } from './Banner/Banner';
import { RecentProjects } from './RecentProjects/RecentProjects';
import { Skills } from './Skills/Skills';
import { TechTiles } from './TechTiles/TechTiles';
import { CurrentTechInterests } from './CurrentTechInterests/CurrentTechInterests';
import { HowItsMade } from './HowItsMade/HowItsMade';
import { Volunteer } from './Volunteer/Volunteer';

import './HomePage.scss';

export const HomePage = () => (
	<div className="home" id="container">
		<Banner />
		<TechTiles />
		<RecentProjects />
		<Skills />
		<CurrentTechInterests />
		<Education />
		<Volunteer />
		<HowItsMade />
	</div>
);
