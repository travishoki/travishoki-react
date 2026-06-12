import React from 'react';

import { TechCatalogueItemData } from '../TechCatalogue.types';

import styles from './TechCatalogueItem.module.scss';

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
		<div className={styles['tech-catalogue-item']} data-tooltip={label}>
			<img alt={label} className={iconClass} src={image} />
			{expanded && <p>{label}</p>}
		</div>
	</li>
);
