import React from 'react';

import styles from './ProjectHeader.module.scss';

export const ProjectHeader = ({ company, subtitle }: ProjectHeaderProps) => (
	<div className={`${styles.projectHeading} mb-3`}>
		<h2>{company}</h2>
		<h3>{subtitle}</h3>
	</div>
);

type ProjectHeaderProps = {
	company: string;
	subtitle?: string;
};
