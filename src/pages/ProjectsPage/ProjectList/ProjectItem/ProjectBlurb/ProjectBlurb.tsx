import React from 'react';

import classNames from 'classnames';

import { getFirstParagraph } from '~helpers/arrays';

import { ProjectType } from '../../../ProjectsPage.types';

import styles from './ProjectBlurb.module.scss';

export const ProjectBlurb = ({
	className,
	company,
	description,
	subtitle,
}: ProjectBlurbProps) => {
	const desc = getFirstParagraph(description);

	return (
		<div className={classNames(styles.projectBlurb, className)}>
			<div className="mb-2">
				<p className={styles.company}>{company}</p>
				{subtitle && <p className={styles.subtitle}>{subtitle}</p>}
			</div>
			<p className={classNames(styles.description, styles.truncate)}>{desc}</p>
		</div>
	);
};

type ProjectBlurbProps = {
	className: string;
} & Pick<ProjectType, 'company' | 'description' | 'subtitle'>;
