import React from 'react';

import { ProjectType } from '../ProjectsPage.data';
import { ProductImageWithPopup } from './ProductImageWithPopup';
import './ProjectItemLine.scss';

export const ProjectItemLine = ({
	company,
	companySlug,
	itemKey,
	projectLink,
}: ProjectItemLineProps) => (
	<div className="line-item">
		<ProductImageWithPopup
			companySlug={companySlug}
			itemKey={itemKey}
			projectLink={projectLink}
		/>
		<div className="product-blurb">
			<p>{company}</p>
		</div>
	</div>
);

type ProjectItemLineProps = {
	projectLink: string;
} & Pick<ProjectType, 'company' | 'companySlug' | 'itemKey'>;
