import React from 'react';

import { Education } from '~components/Education/Education';

import { About } from './About/About';
import { Banner } from './Banner/Banner';
import { CurrentTechInterests } from './CurrentTechInterests/CurrentTechInterests';
import { HowItsMade } from './HowItsMade/HowItsMade';
import { RecentProjects } from './RecentProjects/RecentProjects';
import { Skills } from './Skills/Skills';
import { TechTiles } from './TechTiles/TechTiles';
import { Volunteer } from './Volunteer/Volunteer';

export const HomePage = () => (
	<div className="home" id="container">
		<Banner />
		<About />
		<TechTiles />
		<RecentProjects />
		<Skills />
		<CurrentTechInterests />
		<Education />
		<Volunteer />
		<HowItsMade />
	</div>
);
