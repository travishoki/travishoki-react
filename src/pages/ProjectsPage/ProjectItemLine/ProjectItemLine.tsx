import React from 'react';

import { ProjectType } from '../ProjectsPage.data';
import { ProductImageWithPopup } from '../ProductImageWithPopup/ProductImageWithPopup';
import { ProjectBlurb } from './ProjectBlurb/ProjectBlurb';
import './ProjectItemLine.scss';

export const ProjectItemLine = ({
	company,
	companySlug,
	description,
	itemKey,
	projectLink,
	subtitle,
}: ProjectItemLineProps) => {
	return (
		<div className="line-item">
			<ProductImageWithPopup
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
