import React from 'react';

import { Link } from 'react-router-dom';

import { TechCatalogueItemData } from '../TechCatalogue';

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
	to,
}: TechCatalogueItemProps) => (
	<li className={itemClassName}>
		{to ? (
			<Link title={label} to={to}>
				<img alt={label} className={iconClass} src={image} />
				{expanded && <p>{label}</p>}
			</Link>
		) : (
			<div className="tech-catalogue-item">
				<img alt={label} className={iconClass} src={image} />
				{expanded && <p>{label}</p>}
			</div>
		)}
	</li>
);
