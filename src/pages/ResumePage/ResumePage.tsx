import React from 'react';

import Education from '~components/Education/Education';
import ListSection from '~components/ListSection/ListSection';

import Banner from './Banner';
import Experience from './Experience';
import { SKILLS_LIST } from './ResumePage.data';

import './ResumePage.scss';

const ResumePage = () => (
	<div className="resume" id="container">
		<Banner />

		<section className="primary" />

		<section className="white" />

		<Experience />

		<ListSection list={SKILLS_LIST} title="Skills" />

		<Education />
	</div>
);

export default ResumePage;
