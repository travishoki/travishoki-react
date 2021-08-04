import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import TechIcon from '~components/TechIcon/TechIcon';

const images = require.context('../../../images/websites', true);
const logos = require.context('../../../images/clients', true);

const ProjectItemList = ({
	company,
	contributions,
	desc,
	itemKey,
	learned,
	live,
	subtitle,
	techs,
	title,
	url,
}) => (
	<div className="list-item">
		<div className="projectHeading">
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</div>

		<div className="row">
			<div className="col-sm-6">
				<img
					src={images(`./${itemKey}/lg.jpg`)}
					className="project-img"
				/>
			</div>
			<div className="col-sm-6">
				<img
					src={logos(`./${company}.jpg`)}
					className="logo center"
				/>

				{/* Description */}
				{desc && (
					<Fragment>
						<p className="list-heading">Description:</p>
						<div className="answer-section">
							<p>{desc}</p>
						</div>
					</Fragment>
				)}

				{/* Contributions */}
				{contributions && contributions.length > 0 && (
					<Fragment>
						<p className="list-heading">Contributions:</p>
						<div className="answer-section">
							<ul className="disc">
								{contributions.map((contribution, index) => (
									<li key={index}>{contribution}</li>
								))}
							</ul>
						</div>
					</Fragment>
				)}

				{/* What I learned */}
				{learned && (
					<Fragment>
						<p className="list-heading">What I Learned:</p>
						<div className="answer-section">
							<p>{learned}</p>
						</div>
					</Fragment>
				)}

				{/* Technologies */}
				{techs && techs.length > 0 && (
					<Fragment>
						<p className="list-heading">Technologies:</p>
						<div className="answer-section">
							<ul className="tech-icon-list">
								{techs.map((tech, index) => (
									<li
										key={index}
										className="tech-icon-item"
									>
										<Link
											title={tech}
											to={`/projects/${tech}`}
										>
											<TechIcon name={tech} />
											<p>{tech}</p>
										</Link>
									</li>
								))}
							</ul>
						</div>
					</Fragment>
				)}
			</div>
		</div>

		{live && (
			<a
				href={url}
				className="btn btn-primary btn-lg"
				target="_blank"
			>View Live Site</a>
		)}
	</div>
);

ProjectItemList.propTypes = {
	company: PropTypes.string,
	contributions: PropTypes.array,
	desc: PropTypes.string,
	itemKey: PropTypes.string,
	learned: PropTypes.string,
	live: PropTypes.bool,
	subtitle: PropTypes.string,
	techs: PropTypes.array,
	title: PropTypes.string,
	url: PropTypes.string,
};

ProjectItemList.defaultProps = {
	live: false,
};

export default ProjectItemList;
