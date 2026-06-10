import React from 'react';

import { ReadMoreList } from '~components/ReadMoreList/ReadMoreList';
import { getFirstParagraph } from '~helpers/arrays';

import { ProjectType } from '../../../../ProjectsPage/ProjectsPage.types';

import './Contributions.scss';

export const Contributions = ({ contributions }: ContributionsProps) => {
	if (!contributions || contributions.length === 0) return null;

	const isList = Array.isArray(contributions) && contributions.length > 1;
	const bullets = Array.isArray(contributions) ? contributions : [];

	return (
		<>
			<p className="label">Contributions:</p>
			<div className="answer-section">
				{isList ? (
					<ReadMoreList
						buttonClassName="contributions-read-more"
						initiallyExpanded
						items={bullets}
						listClassName="disc answer-section-list"
					/>
				) : (
					<p className="indent">{getFirstParagraph(contributions)}</p>
				)}
			</div>
		</>
	);
};

type ContributionsProps = Pick<ProjectType, 'contributions'>;
