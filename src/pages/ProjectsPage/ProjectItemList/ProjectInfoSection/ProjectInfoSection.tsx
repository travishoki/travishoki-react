import React from 'react';

import { TechListSwitcher } from '~components/TechListSwitcher/TechListSwitcher';

import { ProjectType } from '../../ProjectsPage.data';
import './ProjectInfoSection.scss';

const logos = require.context('../../../../images/clients', true);

type ProjectInfoSectionProps = Pick<
	ProjectType,
	'company' | 'contributions' | 'date' | 'desc' | 'learned' | 'techs'
>;

export const ProjectInfoSection = ({
	company,
	contributions,
	date,
	desc,
	learned,
	techs,
}: ProjectInfoSectionProps) => (
	<div className="col-sm-6">
		<img className="logo center" src={logos(`./${company}.jpg`)} />

		{date && <p className="project-date">{date}</p>}

		{desc && (
			<>
				<p className="label">Description:</p>
				<div className="answer-section">
					<p>{desc}</p>
				</div>
			</>
		)}

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

		{learned && (
			<>
				<p className="label">What I Learned:</p>
				<div className="answer-section">
					<p>{learned}</p>
				</div>
			</>
		)}

		{techs && techs.length > 0 && (
			<TechListSwitcher initialExpanded list={techs} />
		)}
	</div>
);
