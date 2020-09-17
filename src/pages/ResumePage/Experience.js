import React from 'react';
import { Link } from 'react-router';

import { ResumeData } from './ResumePage.data';

const Experience = () => (
    <div className="boxed boxed-lg">
        <h2>Experience</h2>

        <ul className="staggered">
            {ResumeData.map((job, index) => (
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
);

export default Experience;
