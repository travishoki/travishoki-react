import React from 'react';

import './ProjectHeader.scss';

type ProjectHeaderProps = {
	company: string;
	subtitle?: string;
};

export const ProjectHeader = ({ company, subtitle }: ProjectHeaderProps) => (
	<div className="project-heading mb-3">
		<h2>{company}</h2>
		<h3>{subtitle}</h3>
	</div>
);
