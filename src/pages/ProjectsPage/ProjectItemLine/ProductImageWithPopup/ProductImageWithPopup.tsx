import React from 'react';

import { ProjectPopup } from './ProjectPopup/ProjectPopup';
import './ProductImageWithPopup.scss';

type ProductImageWithPopupProps = {
	companySlug: string;
	itemKey: string;
	projectLink: string;
};

const images = require.context('../../../../images/websites', true);

export const ProductImageWithPopup = ({
	companySlug,
	itemKey,
	projectLink,
}: ProductImageWithPopupProps) => (
	<>
		<ProjectPopup
			companySlug={companySlug}
			itemKey={itemKey}
			projectLink={projectLink}
		/>
		<img className="project-img" src={images(`./${itemKey}/sm.jpg`)} />
	</>
);
