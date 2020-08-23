import React from 'react';
import PropTypes from 'prop-types';
const images = require.context('../../../images/websites', true);
const logos = require.context('../../../images/clients', true);
import TechIcon from './TechIcon';

const ProjectListItem = ({ project }) => (
	<div className="list-item">
		<div className="projectHeading">
			<h2>{project.title}</h2>
			<h3>{project.subtitle}</h3>
		</div>
		<div className="row">
			<div className="col-sm-6">
				<img src={images(`./${project.key}/lg.jpg`)} className="project-img" />
			</div>
			<div className="col-sm-6">
				<img src={logos(`./${project.company}.jpg`)} className="logo center"/>

				<p className="list-heading">Description:</p>
				<p className="indent">{project.desc}</p>
				<p className="list-heading">Contributions:</p>

				<ul className="m-l-20 disc">
					{project.contributions.map((contribution, index) => (
						<li key={index}>{contribution}</li>
					))}
				</ul>

				{project.learned &&
					<div>
						<p className="list-heading">What I Learned:</p>
						<p className="indent">{project.learned}</p>
					</div>
				}

				<p className="list-heading">Technologies:</p>
				<ul className="m-l-20 tech-icon-list">
					{project.techs.map((tech, index) => (
						<li key={index} className="tech-icon-item">
							<TechIcon name={tech} />
							<p>{tech}</p>
						</li>
					))}
				</ul>
			</div>
      </div>

      {project.live &&
          <a href={project.url} className="btn btn-primary btn-lg" target="_blank">View Live Site</a>
      }
  </div>
);

ProjectListItem.propTypes = {
    project: PropTypes.array.isRequired
};

export default ProjectListItem;
