import React from 'react';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

import { ProjectType } from '../../ProjectsPage.data';
import './ProjectInfoSection.scss';

const logos = require.context('../../../../images/clients', true);

type ProjectInfoSectionProps = Pick<
	ProjectType,
	'companySlug' | 'contributions' | 'date' | 'description' | 'learned' | 'techs'
>;

export const ProjectInfoSection = ({
	companySlug,
	contributions,
	date,
	description,
	learned,
	techs,
}: ProjectInfoSectionProps) => {
	const descriptionArray = Array.isArray(description)
		? description
		: [description];

	return (
		<div className="col-sm-6">
			<img className="logo center" src={logos(`./${companySlug}.jpg`)} />

			{date && (
				<>
					<p className="label">Date Range:</p>
					<div className="answer-section">
						<p>{date}</p>
					</div>
				</>
			)}

			{description.length && (
				<>
					<p className="label">Description:</p>
					<div className="answer-section">
						{descriptionArray.map((paragraph, index) => (
							<p key={index} className="indent">
								{paragraph}
							</p>
						))}
					</div>
				</>
			)}

			{contributions && contributions.length > 0 && (
				<>
					<p className="label">Contributions:</p>
					<div className="answer-section">
						{Array.isArray(contributions) ? (
							<ul className="disc answer-section-list">
								{contributions.map((contribution, index) => (
									<li key={index}>{contribution}</li>
								))}
							</ul>
						) : (
							<p>{contributions}</p>
						)}
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
				<TechListCatalogue initialExpanded list={techs} />
			)}
		</div>
	);
};
