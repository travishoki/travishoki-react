import React from 'react';

import Education from '~components/Education/Education';

import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import TechTiles from './TechTiles/TechTiles';

import './HomePage.scss';

const HomePage = () => (
	<div className="home" id="container">
		<Banner />
		<TechTiles />
		<Projects />
		<Skills />
		<Education />
	</div>
);

export default HomePage;
