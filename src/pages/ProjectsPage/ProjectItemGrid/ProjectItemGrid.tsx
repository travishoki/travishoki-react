import React from 'react';

import { ProjectImageWithPopup } from '../ProjectImageWithPopup/ProjectImageWithPopup';
import { ProjectType } from '../ProjectsPage.types';
import './ProjectItemGrid.scss';

export const ProjectItemGrid = ({
	companySlug,
	itemKey,
	projectLink,
}: ProjectItemGridProps) => (
	<div className="grid-item">
		<ProjectImageWithPopup
			companySlug={companySlug}
			itemKey={itemKey}
			projectLink={projectLink}
		/>{' '}
	</div>
);

type ProjectItemGridProps = {
	projectLink: string;
} & Pick<ProjectType, 'companySlug' | 'itemKey'>;
