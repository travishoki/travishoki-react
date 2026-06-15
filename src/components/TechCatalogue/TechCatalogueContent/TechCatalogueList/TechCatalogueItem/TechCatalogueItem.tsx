import React from 'react';

import classNames from 'classnames';

import { TechCatalogueItemData } from '../../../TechCatalogue.types';
import { useItemClassName } from '../../../TechCatalogueContext';

import styles from './TechCatalogueItem.module.scss';

export const TechCatalogueItem = ({
	expanded,
	iconClassName,
	image,
	label,
}: TechCatalogueItemProps) => {
	const itemClassName = useItemClassName();

	return (
		// The grid column class only applies in the expanded layout.
		<li className={expanded ? itemClassName : undefined}>
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
};

type TechCatalogueItemProps = TechCatalogueItemData & {
	expanded: boolean;
	iconClassName: string;
};
