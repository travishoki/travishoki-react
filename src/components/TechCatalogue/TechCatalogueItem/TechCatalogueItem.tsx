import React from 'react';

import classNames from 'classnames';

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
		<div
			className={classNames(
				styles.techCatalogueItem,
				expanded ? styles.techCatalogueItemExpanded : '',
			)}
			data-tooltip={label}
		>
			<img alt={`${label} Logo Icon`} className={iconClass} src={image} />
			{expanded && <p>{label}</p>}
		</div>
	</li>
);
