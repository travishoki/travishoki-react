import React from 'react';

import { ProjectType } from '../../ProjectsPage.data';
import { TechListSwitcher } from '~components/TechListSwitcher/TechListSwitcher';

const images = require.context('../../../../images/websites', true);
const logos = require.context('../../../../images/clients', true);

export const ProjectItemList = ({
	company,
	contributions,
	desc,
	itemKey,
	learned,
	live = false,
	subtitle,
	techs,
	title,
	url,
}: ProjectItemListProps) => (
	<div className="list-item">
		<div className="projectHeading">
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</div>

		<div className="row">
			<div className="col-sm-6">
				<img className="project-img" src={images(`./${itemKey}/lg.jpg`)} />
			</div>
			<div className="col-sm-6">
				<img className="logo center" src={logos(`./${company}.jpg`)} />

				{/* Description */}
				{desc && (
					<>
						<p className="list-heading">Description:</p>
						<div className="answer-section">
							<p>{desc}</p>
						</div>
					</>
				)}

				{/* Contributions */}
				{contributions && contributions.length > 0 && (
					<>
						<p className="list-heading">Contributions:</p>
						<div className="answer-section">
							<ul className="disc">
								{contributions.map((contribution, index) => (
									<li key={index}>{contribution}</li>
								))}
							</ul>
						</div>
					</>
				)}

				{/* What I learned */}
				{learned && (
					<>
						<p className="list-heading">What I Learned:</p>
						<div className="answer-section">
							<p>{learned}</p>
						</div>
					</>
				)}

				{/* Technologies */}
				{techs && techs.length > 0 && (
					<>
						<p className="list-heading">Technologies:</p>
						<div className="answer-section">
							<TechListSwitcher intialExpanded list={techs} />
						</div>
					</>
				)}
			</div>
		</div>

		{live && (
			<a
				className="btn btn-primary btn-lg"
				href={url}
				rel="noreferrer"
				target="_blank"
			>
				View Live Site
			</a>
		)}
	</div>
);

type ProjectItemListProps = ProjectType;
