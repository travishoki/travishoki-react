import React from 'react';

import classNames from 'classnames';

import { ProjectImageWithPopup } from '../ProjectImageWithPopup/ProjectImageWithPopup';
import { ProjectType } from '../ProjectsPage.types';

import styles from './ProjectItemGrid.module.scss';

export const ProjectItemGrid = ({
	className,
	companySlug,
	itemKey,
	projectLink,
}: ProjectItemGridProps) => (
	<div className={classNames(styles.gridItem, className)}>
		<ProjectImageWithPopup
			companySlug={companySlug}
			itemKey={itemKey}
			projectLink={projectLink}
		/>{' '}
	</div>
);

type ProjectItemGridProps = {
	className?: string;
	projectLink: string;
} & Pick<ProjectType, 'companySlug' | 'itemKey'>;
