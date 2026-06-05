import React from 'react';

import { ProjectType } from '../ProjectsPage.data';
import { ProductImageWithPopup } from '../ProjectItemLine/ProductImageWithPopup';
import './ProjectItemGrid.scss';

export const ProjectItemGrid = ({
	companySlug,
	itemKey,
	projectLink,
}: ProjectItemGridProps) => (
	<div className="grid-item">
		<ProductImageWithPopup
			companySlug={companySlug}
			itemKey={itemKey}
			projectLink={projectLink}
		/>{' '}
	</div>
);

type ProjectItemGridProps = {
	projectLink: string;
} & Pick<ProjectType, 'companySlug' | 'itemKey'>;
