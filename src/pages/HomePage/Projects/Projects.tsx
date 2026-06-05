import React from 'react';
import { Link } from 'react-router-dom';

import {
	handleWebsiteImageError,
	websiteImageSrc,
} from '~helpers/websiteImages';

import { orderTopThreeInPodium } from './Projects.helpers';
import { PROJECTS_DATA } from '../../ProjectsPage/ProjectsPage.data';
import './Projects.scss';

const currentProjects = orderTopThreeInPodium(PROJECTS_DATA.slice(0, 3));

export const Projects = () => (
	<section className="projects">
		<h2>Recent Projects</h2>

		<div className="boxed boxed-lg">
			<ul>
				{currentProjects.map((project, index) => (
					<li key={index}>
						<Link to={`/project/${project.itemKey}`}>
							<div className="project-header">
								<div className="project-header-inner">
									<h3>{project.company}</h3>
									<h4>{project.subtitle}</h4>
								</div>
							</div>
							<img
								className="project-img"
								onError={handleWebsiteImageError('sm')}
								src={websiteImageSrc(project.itemKey, 'sm')}
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
