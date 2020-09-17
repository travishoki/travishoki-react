import React from 'react';

import Banner from './Banner';
import Experience from './Experience';
import { SKILLS_LIST } from './ResumePage.data';
import Education from '../../components/Education/Education';
import ListSection from '../../components/ListSection/ListSection';

const ResumePage = () => (
    <div
		id="container"
		className="resume"
	>
		<Banner />

        <section className="primary" />

        <section className="white" />

		<Experience />

        <ListSection
			title="Skills"
			list={SKILLS_LIST}
		/>

        <Education />
    </div>
);

export default ResumePage;
