import React from 'react';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';
import './ProjectInfoSection.scss';
import { TextWithReadMore } from '~components/TextWithReadMore/TextWithReadMore';
import { Contributions } from './Contributions/Contributions';

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
						<TextWithReadMore initiallyExpanded paragraphs={descriptionArray} />
					</div>
				</>
			)}

			<Contributions contributions={contributions} />

			{learned && (
				<>
					<p className="label">What I Learned:</p>
					<div className="answer-section">
						<p className="indent">{learned}</p>
					</div>
				</>
			)}

			{techs && techs.length > 0 && (
				<TechListCatalogue initialExpanded list={techs} />
			)}
		</div>
	);
};
