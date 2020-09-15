import React from 'react';

import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import HokiSkateboards from './HokiSkateboards/HokiSkateboards';
import Skills from './Skills/Skills';
import TechTiles from './TechTiles/TechTiles';
import { skillsList } from './HomePage.data';
import { getExperienceYears } from './HomePage.helpers';
import Education from '../common/Education';
import ListSection from '../common/ListSection';

const HomePage = () => (
    <div
		id="container"
		className="home"
	>
		<Banner />

		<TechTiles />

		<Projects />

		<Skills />

        <Education />

		<HokiSkateboards />
	</div>
);

export default HomePage;
