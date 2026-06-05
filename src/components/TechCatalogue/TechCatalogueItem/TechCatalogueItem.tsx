import React from 'react';

import { TechCatalogueItemData } from '../TechCatalogue.types';

type TechCatalogueItemProps = TechCatalogueItemData & {
	expanded: boolean;
	iconClass: string;
	itemClassName?: string;
};

export const TechCatalogueItem = ({
	expanded,
	iconClass,
	image,
	itemClassName,
	label,
}: TechCatalogueItemProps) => (
	<li className={itemClassName}>
		<div className="tech-catalogue-item">
			<img alt={label} className={iconClass} src={image} />
			{expanded && <p>{label}</p>}
		</div>
	</li>
);
