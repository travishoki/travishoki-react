import React from 'react';
import { Link } from "react-router-dom";

import { orderTopThree } from './Projects.utils';
import { ProjectsData } from '../../ProjectsPage/ProjectsPage.data';

const images = require.context('../../../../images/websites', true);
const currentProjects = orderTopThree(ProjectsData.slice(0, 3));

const Projects = () => (
    <section className="projects">
        <h3>Recent Projects</h3>

        <div className="boxed boxed-lg">
            <ul>
                {currentProjects.map((project, index) => (
                    <li key={index}>
						<Link to={`/project/${project.itemKey}`}>
							<div className="project-header">
								<div className="project-header-inner">
									<h2>{project.title}</h2>
									<h3>{project.subtitle}</h3>
								</div>
							</div>
							<img
								src={images(`./${project.itemKey}/sm.jpg`)}
								className="project-img"
							/>
						</Link>
					</li>
                ))}
            </ul>

            <Link
				to="/projects"
				className="btn btn-primary btn-lg"
			>View All Projects</Link>
        </div>
    </section>
);

export default Projects;
