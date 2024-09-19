import React from 'react';

import { Education } from '~components/Education/Education';

import { DownloadSection } from './DownloadSection';
import { Experience } from './Experience';
import { Skills } from '../HomePage/Skills/Skills';
import { TechTiles } from '../HomePage/TechTiles/TechTiles';
import './ResumePage.scss';

export const ResumePage = () => (
	<div className="resume" id="container">
		<h1>Resume</h1>

		<DownloadSection />

		<Experience />
		<TechTiles />
		<Skills />

		<Education />
	</div>
);
