import React from 'react';

import { Education } from '~components/Education/Education';

import { About } from './About/About';
import { AiPoweredProjects } from './AiPoweredProjects/AiPoweredProjects';
import { Banner } from './Banner/Banner';
import { CurrentTechInterests } from './CurrentTechInterests/CurrentTechInterests';
import { FeaturedProjects } from './FeaturedProjects/FeaturedProjects';
import { Skills } from './Skills/Skills';
import { TechTiles } from './TechTiles/TechTiles';
import { Volunteer } from './Volunteer/Volunteer';

export const HomePage = () => (
	<div className="home" id="container">
		<Banner />
		<About />
		<TechTiles />
		<FeaturedProjects />
		<AiPoweredProjects />
		<Skills />
		<CurrentTechInterests />
		<Education />
		<Volunteer />
	</div>
);
