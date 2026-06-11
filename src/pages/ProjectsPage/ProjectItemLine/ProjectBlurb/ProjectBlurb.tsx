import React from 'react';

import { getFirstParagraph } from '~helpers/arrays';

import { ProjectType } from '../../ProjectsPage.types';

import styles from './ProjectBlurb.module.scss';

export const ProjectBlurb = ({
	company,
	description,
	subtitle,
}: ProjectBlurbProps) => {
	const desc = getFirstParagraph(description);

	return (
		<div className={styles.projectBlurb}>
			<div className="mb-2">
				<p className={styles.company}>{company}</p>
				{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
			</div>
			<p className={`${styles.description} ${styles.truncate}`}>{desc}</p>
		</div>
	);
};

type ProjectBlurbProps = Pick<
	ProjectType,
	'company' | 'description' | 'subtitle'
>;
