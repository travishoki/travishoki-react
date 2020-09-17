import React from 'react';
import { Link } from 'react-router';

import { ProjectsData } from '../../ProjectsPage/ProjectsPage.data';

const images = require.context('../../../../images/websites', true);
const currentProjects = ProjectsData.slice(0, 3);

const Projects = () => (
    <section className="projects">
        <h3>Recent Projects</h3>

        <div className="boxed boxed-lg">
            <ul>
                {currentProjects.map((project, index) => (
                    <li key={index}>
                        <div className="project-header">
                            <div className="project-header-inner">
                                <h2>{project.title}</h2>
                                <h3>{project.subtitle}</h3>
                            </div>
                        </div>
                        <img
                            src={images(`./${project.key}/sm.jpg`)}
                            className="project-img"
                        />
                    </li>
                ))}
            </ul>

            <Link
				to="/projects"
				activeClassName="active"
				className="btn btn-primary btn-lg"
			>View All Projects</Link>
        </div>
    </section>
);

export default Projects;