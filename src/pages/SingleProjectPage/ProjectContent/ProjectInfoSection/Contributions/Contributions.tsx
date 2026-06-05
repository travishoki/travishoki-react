import React from 'react';

import { ProjectType } from '../../../../ProjectsPage/ProjectsPage.types';

type ContributionsProps = Pick<ProjectType, 'contributions'>;

export const Contributions = ({ contributions }: ContributionsProps) => {
	if (!contributions || contributions.length === 0) return null;

	return (
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
	);
};
