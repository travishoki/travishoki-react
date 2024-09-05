import React from 'react';

import Education from '~components/Education/Education';

import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import HokiSkateboards from './HokiSkateboards/HokiSkateboards';
import Skills from './Skills/Skills';
import TechTiles from './TechTiles/TechTiles';

const HomePage = () => (
	<div className="home" id="container">
		<Banner />
		<TechTiles />
		<Projects />
		<Skills />
		<Education />
		<HokiSkateboards />
	</div>
);

export default HomePage;
