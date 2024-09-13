import React from 'react';

import Education from '~components/Education/Education';
import ListSection from '~components/ListSection/ListSection';

import DownloadButton from './DownloadButton';
import Experience from './Experience';
import { SKILLS_LIST } from './ResumePage.data';

import './ResumePage.scss';

const ResumePage = () => (
	<div className="resume" id="container">
		<h1>Resume</h1>

		<DownloadButton />

		<Experience />

		<ListSection list={SKILLS_LIST} title="Skills" />

		<Education />
	</div>
);

export default ResumePage;
