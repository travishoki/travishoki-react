import React from 'react';

import classNames from 'classnames';

import { TechCatalogueItemData } from '../../../TechCatalogue.types';
import { useCircle, useItemClassName } from '../../../TechCatalogueContext';

import styles from './TechCatalogueItem.module.scss';

export const TechCatalogueItem = ({
	expanded,
	image,
	label,
}: TechCatalogueItemProps) => {
	const circle = useCircle();
	const itemClassName = useItemClassName();

	// Derived from the circle context here at the leaf, rather than computed in
	// Content and drilled down. The icon classes live in Content's module so the
	// `.techCatalogueExpanded .techCatalogueIcon` margin rule still matches.
	const iconClassName = classNames(
		styles.techCatalogueIcon,
		circle
			? styles.techCatalogueIconCircle
			: styles.softwareCatalogueIconRounded,
	);

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
};
