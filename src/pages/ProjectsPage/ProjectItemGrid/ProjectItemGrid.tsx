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
	subtitle,
}: ProjectItemGridProps) => (
	<div className={classNames(styles.gridItem, className)}>
		<ProjectImageWithPopup
			company={company}
			companySlug={companySlug}
			itemKey={itemKey}
			projectLink={projectLink}
			subtitle={subtitle}
		/>{' '}
	</div>
);

type ProjectItemGridProps = {
	className?: string;
	projectLink: string;
} & Pick<ProjectType, 'companySlug' | 'itemKey' | 'company' | 'subtitle'>;
