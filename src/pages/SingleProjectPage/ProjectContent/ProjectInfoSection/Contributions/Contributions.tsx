import React, { useState } from 'react';

import { ReadMoreButton } from '~components/ReadMoreButton/ReadMoreButton';
import { getFirstParagraph } from '~helpers/arrays';

import { ProjectType } from '../../../../ProjectsPage/ProjectsPage.types';
import './Contributions.scss';

const COLLAPSED_COUNT = 3;

export const Contributions = ({ contributions }: ContributionsProps) => {
	const [expanded, setExpanded] = useState(true);

	if (!contributions || contributions.length === 0) return null;

	const isList = Array.isArray(contributions) && contributions.length > 1;
	const bullets = Array.isArray(contributions) ? contributions : [];
	const hasReadMore = bullets.length > COLLAPSED_COUNT;
	const visibleBullets =
		expanded || !hasReadMore ? bullets : bullets.slice(0, COLLAPSED_COUNT);

	return (
		<>
			<p className="label">Contributions:</p>
			<div className="answer-section">
				{isList ? (
					<>
						<ul className="disc answer-section-list">
							{visibleBullets.map((contribution, index) => (
								<li key={index}>{contribution}</li>
							))}
						</ul>

						{hasReadMore && (
							<ReadMoreButton
								className="contributions-read-more"
								expanded={expanded}
								onToggle={() => setExpanded(!expanded)}
							/>
						)}
					</>
				) : (
					<p className="indent">{getFirstParagraph(contributions)}</p>
				)}
			</div>
		</>
	);
};

type ContributionsProps = Pick<ProjectType, 'contributions'>;
