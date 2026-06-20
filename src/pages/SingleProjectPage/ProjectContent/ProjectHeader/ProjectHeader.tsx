import React from 'react';

import { CLIENT_LOGOS } from '../../../ProjectsPage/ProjectsPage.ClientLogos.data';

import styles from './ProjectHeader.module.scss';

export const ProjectHeader = ({
	company,
	companySlug,
	subtitle,
}: ProjectHeaderProps) => (
	<section className={`primary-three mb-3 ${styles.projectHeading}`}>
		{CLIENT_LOGOS[companySlug] && (
			<img
				alt={company}
				className={styles.logo}
				src={CLIENT_LOGOS[companySlug]}
			/>
		)}
		<div>
			<h2>{company}</h2>
			<h3>{subtitle}</h3>
		</div>
	</section>
);

type ProjectHeaderProps = {
	company: string;
	companySlug: string;
	subtitle?: string;
};
