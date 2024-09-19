import React from 'react';

import { Education } from '~components/Education/Education';

import { DownloadSection } from './DownloadSection';
import { Experience } from './Experience';
import './ResumePage.scss';

export const ResumePage = () => (
	<div className="resume" id="container">
		<h1>Resume</h1>

		<DownloadSection />

		<Experience />

		<Education />
	</div>
);
