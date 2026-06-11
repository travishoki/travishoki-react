import React from 'react';

import { ProjectType } from '../ProjectsPage.types';
import { ProjectBlurb } from './ProjectBlurb/ProjectBlurb';
import { ProjectImageWithPopup } from '../ProjectImageWithPopup/ProjectImageWithPopup';

import styles from './ProjectItemLine.module.scss';

export const ProjectItemLine = ({
	company,
	companySlug,
	description,
	itemKey,
	projectLink,
	subtitle,
}: ProjectItemLineProps) => {
	return (
		<div className={styles.projectItemLine}>
			<ProjectImageWithPopup
				companySlug={companySlug}
				itemKey={itemKey}
				projectLink={projectLink}
			/>
			<ProjectBlurb
				company={company}
				description={description}
				subtitle={subtitle}
			/>
		</div>
	);
};

type ProjectItemLineProps = {
	projectLink: string;
} & Pick<
	ProjectType,
	'company' | 'companySlug' | 'description' | 'itemKey' | 'subtitle'
>;
