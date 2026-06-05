import React from 'react';

import { ProjectType } from '../../../../ProjectsPage/ProjectsPage.types';
import { getFirstParagraph } from '~helpers/arrays';

type ContributionsProps = Pick<ProjectType, 'contributions'>;

export const Contributions = ({ contributions }: ContributionsProps) => {
	if (!contributions || contributions.length === 0) return null;

	const isArray = Array.isArray(contributions) && contributions.length > 1;

	return (
		<>
			<p className="label">Contributions:</p>
			<div className="answer-section">
				{isArray ? (
					<ul className="disc answer-section-list">
						{contributions.map((contribution, index) => (
							<li key={index}>{contribution}</li>
						))}
					</ul>
				) : (
					<p className="indent">{getFirstParagraph(contributions)}</p>
				)}
			</div>
		</>
	);
};
