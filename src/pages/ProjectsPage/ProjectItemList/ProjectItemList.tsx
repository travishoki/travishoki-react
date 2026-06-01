import React from 'react';

import { ProjectType } from '../ProjectsPage.data';
import { TechListSwitcher } from '~components/TechListSwitcher/TechListSwitcher';

const images = require.context('../../../images/websites', true);
const logos = require.context('../../../images/clients', true);

export const ProjectItemList = ({
	company,
	contributions,
	date,
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
		<div className="project-heading">
			<h2>{title}</h2>
			<h3>{subtitle}</h3>
		</div>

		<div className="row">
			<div className="col-sm-6">
				<img className="project-img" src={images(`./${itemKey}/lg.jpg`)} />
			</div>
			<div className="col-sm-6">
				<img className="logo center" src={logos(`./${company}.jpg`)} />

				{/* Date */}
				{date && <p className="project-date">{date}</p>}

				{/* Description */}
				{desc && (
					<>
						<p className="label">Description:</p>
						<div className="answer-section">
							<p>{desc}</p>
						</div>
					</>
				)}

				{/* Contributions */}
				{contributions && contributions.length > 0 && (
					<>
						<p className="label">Contributions:</p>
						<div className="answer-section">
							<ul className="disc answer-section-list">
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
						<p className="label">What I Learned:</p>
						<div className="answer-section">
							<p>{learned}</p>
						</div>
					</>
				)}

				{/* Technologies */}
				{techs && techs.length > 0 && (
					<>
						<p className="label">Technology:</p>
						<div className="answer-section">
							<TechListSwitcher initialExpanded list={techs} />
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
