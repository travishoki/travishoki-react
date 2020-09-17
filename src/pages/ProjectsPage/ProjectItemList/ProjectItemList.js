import React from 'react';
import PropTypes from 'prop-types';

const images = require.context('../../../../images/websites', true);
const logos = require.context('../../../../images/clients', true);
import TechIcon from '../TechIcon/TechIcon';

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

				<p className="list-heading">Description:</p>
				<p className="indent">{desc}</p>
				<p className="list-heading">Contributions:</p>

				<ul className="m-l-20 disc">
					{contributions.map((contribution, index) => (
						<li key={index}>{contribution}</li>
					))}
				</ul>

				{learned && (
					<div>
						<p className="list-heading">What I Learned:</p>
						<p className="indent">{learned}</p>
					</div>
				)}

				<p className="list-heading">Technologies:</p>
				<ul className="m-l-20 tech-icon-list">
					{techs.map((tech, index) => (
						<li
							key={index}
							className="tech-icon-item"
						>
							<TechIcon name={tech} />
							<p>{tech}</p>
						</li>
					))}
				</ul>
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
	contributions: PropTypes.string,
	desc: PropTypes.string,
	itemKey: PropTypes.string,
	learned: PropTypes.string,
	live: PropTypes.bool,
	subtitle: PropTypes.string,
	techs: PropTypes.string,
	title: PropTypes.string,
	url: PropTypes.string,
};

ProjectItemList.defaultProps = {
	live: false,
};

export default ProjectItemList;
