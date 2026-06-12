import React from 'react';

import classNames from 'classnames';

import { ProjectImageWithPopup } from '../ProjectImageWithPopup/ProjectImageWithPopup';
import { ProjectType } from '../ProjectsPage.types';

import styles from './ProjectItemGrid.module.scss';

export const ProjectItemGrid = ({
	className,
	company,
	companySlug,
	itemKey,
	projectLink,
}: ProjectItemGridProps) => (
	<div className={classNames(styles.gridItem, className)}>
		<ProjectImageWithPopup
			company={company}
			companySlug={companySlug}
			itemKey={itemKey}
			projectLink={projectLink}
		/>{' '}
	</div>
);

type ProjectItemGridProps = {
	className?: string;
	projectLink: string;
} & Pick<ProjectType, 'companySlug' | 'itemKey' | 'company'>;
