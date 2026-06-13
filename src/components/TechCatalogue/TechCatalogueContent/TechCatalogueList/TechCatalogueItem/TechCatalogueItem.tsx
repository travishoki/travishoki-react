import React from 'react';

import classNames from 'classnames';

import { TechCatalogueItemData } from '../../../TechCatalogue.types';

import styles from './TechCatalogueItem.module.scss';

type TechCatalogueItemProps = TechCatalogueItemData & {
	expanded: boolean;
	iconClassName: string;
	itemClassName?: string;
};

export const TechCatalogueItem = ({
	expanded,
	iconClassName,
	image,
	itemClassName,
	label,
}: TechCatalogueItemProps) => (
	<li className={itemClassName}>
		<div
			className={classNames(styles.techCatalogueItem, {
				[styles.techCatalogueItemExpanded]: expanded,
			})}
			data-tooltip={label}
		>
			<img alt={`${label} Logo Icon`} className={iconClassName} src={image} />
			{expanded && <p>{label}</p>}
		</div>
	</li>
);
