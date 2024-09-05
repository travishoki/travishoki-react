import React from 'react';
import { Link } from 'react-router-dom';

import { orderTopThreeInPodium } from './Projects.utils';
import { PROJECTS_DATA } from '../../ProjectsPage/ProjectsPage.data';

console.log('PROJECTS_DATA:');
console.dir(PROJECTS_DATA);

const images = require.context('../../../images/websites', true);
const currentProjects = orderTopThreeInPodium(PROJECTS_DATA.slice(0, 3));

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
								className="project-img"
								src={images(`./${project.itemKey}/sm.jpg`)}
							/>
						</Link>
					</li>
				))}
			</ul>

			<Link className="btn btn-primary btn-lg" to="/projects">
				View All Projects
			</Link>
		</div>
	</section>
);

export default Projects;
