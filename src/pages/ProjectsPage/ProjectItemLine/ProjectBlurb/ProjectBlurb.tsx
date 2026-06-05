import React from 'react';

import './ProjectBlurb.scss';
import { getFirstParagraph } from '~helpers/arrays';

export const ProjectBlurb = ({
	company,
	description,
	subtitle,
}: ProjectBlurbProps) => {
	const desc = getFirstParagraph(description);

	return (
		<div className="project-blurb">
			<p className="company">{company}</p>
			<p className="subtitle">{subtitle}</p>
			<p className="description truncate">{desc}</p>
		</div>
	);
};

type ProjectBlurbProps = {
	company: string;
	description: string | string[];
	subtitle: string;
};
