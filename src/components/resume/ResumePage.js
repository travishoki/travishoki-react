import React from 'react';
import { Link } from 'react-router';

import ResumePageData from './ResumePage.data';
import Education from '../common/Education';
import ListSection from '../common/ListSection';

const imgResume = require('../../../images/resume/resume.jpg');

const SKILLS_LIST = [
	'JavaScript',
	'React JS',
	'Redux',
	'Reselect',
	'Node JS',
	'HTML',
	'CSS',

	'Angular JS',
	'SASS',
	'LESS',
	'jQuery',
    'PHP',
    'SQL'
];

const img_profile_pic = require('../../../images/global/resume.png');

const ResumePage = () => (
    <div
		id="container"
		className="resume"
	>
        <div className="banner">
            <div className="banner-cont">
                <h1>Resume</h1>

                <a
					className="btn btn-primary btn-lg"
					href="/portfolio/pdfs/travis-hoki-resume.pdf"
					target="_blank"
				>
                    <i className="fa fa-download" /> Download
                </a>
            </div>

            <div className="banner-bg" />
            <img
				className="banner-pic"
				src={img_profile_pic}
			/>
        </div>

        <section className="primary" />

        <section className="white" />

        <div className="boxed boxed-lg">
            <h2>Experience</h2>

            <ul className="staggered">
                {ResumePageData.map((job, index) => (
                    <li key={index}>
                        <div className="image">
                            <img src={job.img}/>
                        </div>

                        <div className="text">
                            <h3>{job.title}</h3>

                            <div className="sub-line">
                                <h4>{job.position}</h4>
                                <p className="date">{job.dateStart} - {job.dateEnd}</p>
                            </div>

							<ul>
								{job.tasks.map((task, index) => (
									<li key={index}>{task}</li>
								))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

        <ListSection
			title="Skills"
			list={SKILLS_LIST}
		/>

        <Education />
    </div>
);

export default ResumePage;
