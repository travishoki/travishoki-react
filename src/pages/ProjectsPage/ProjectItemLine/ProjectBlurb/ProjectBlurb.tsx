import React from 'react';

import { getFirstParagraph } from '~helpers/arrays';

import { ProjectType } from '../../ProjectsPage.types';

import './ProjectBlurb.scss';

export const ProjectBlurb = ({
	company,
	description,
	subtitle,
}: ProjectBlurbProps) => {
	const desc = getFirstParagraph(description);

	return (
		<div className="project-blurb">
			<div className="mb-2">
				<p className="company">{company}</p>
				{subtitle && <p className="subtitle">{subtitle}</p>}
			</div>
			<p className="description truncate">{desc}</p>
		</div>
	);
};

type ProjectBlurbProps = Pick<
	ProjectType,
	'company' | 'description' | 'subtitle'
>;
