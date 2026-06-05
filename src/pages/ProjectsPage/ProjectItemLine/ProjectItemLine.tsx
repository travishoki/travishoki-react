import React from 'react';

import { firstItem } from '~helpers/arrays';
import { ProjectType } from '../ProjectsPage.data';
import { ProductImageWithPopup } from './ProductImageWithPopup/ProductImageWithPopup';
import './ProjectItemLine.scss';

export const ProjectItemLine = ({
	company,
	companySlug,
	description,
	itemKey,
	projectLink,
	subtitle,
}: ProjectItemLineProps) => {
	const desc = firstItem(description);

	return (
		<div className="line-item">
			<ProductImageWithPopup
				companySlug={companySlug}
				itemKey={itemKey}
				projectLink={projectLink}
			/>
			<div className="product-blurb">
				<p className="company">{company}</p>
				<p className="subtitle">{subtitle}</p>
				<p className="description truncate">{desc}</p>
			</div>
		</div>
	);
};

type ProjectItemLineProps = {
	projectLink: string;
} & Pick<
	ProjectType,
	'company' | 'companySlug' | 'description' | 'itemKey' | 'subtitle'
>;
