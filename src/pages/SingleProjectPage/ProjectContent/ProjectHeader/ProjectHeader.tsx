import React from 'react';

import styles from './ProjectHeader.module.scss';

type ProjectHeaderProps = {
	company: string;
	subtitle?: string;
};

export const ProjectHeader = ({ company, subtitle }: ProjectHeaderProps) => (
	<div className={`${styles.projectHeading} mb-3`}>
		<h2>{company}</h2>
		<h3>{subtitle}</h3>
	</div>
);
