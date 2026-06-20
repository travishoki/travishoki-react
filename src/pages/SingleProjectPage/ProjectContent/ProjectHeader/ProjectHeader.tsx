import React from 'react';

import styles from './ProjectHeader.module.scss';

export const ProjectHeader = ({ company, subtitle }: ProjectHeaderProps) => (
	<section className={`primary-three mb-3 ${styles.projectHeading}`}>
		<h2>{company}</h2>
		<h3>{subtitle}</h3>
	</section>
);

type ProjectHeaderProps = {
	company: string;
	subtitle?: string;
};
