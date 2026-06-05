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
			<div className="mb-2">
				<p className="company">{company}</p>
				{subtitle && <p className="subtitle">{subtitle}</p>}
			</div>
			<p className="description truncate">{desc}</p>
		</div>
	);
};

type ProjectBlurbProps = {
	company: string;
	description: string | string[];
	subtitle: string;
};
