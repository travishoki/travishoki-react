import React from 'react';

import classNames from 'classnames';

import { useCircle } from '~components/TechCatalogue/TechCatalogueContext';

import { getExpandedStyle } from './TechCatalogueItem.helpers';
import { TechCatalogueItemData } from '../../../TechCatalogue.types';

import styles from './TechCatalogueItem.module.scss';

export const TechCatalogueItem = ({
	columns,
	expanded,
	image,
	label,
}: TechCatalogueItemProps) => {
	const circle = useCircle();

	const itemClassName = classNames(
		styles.techCatalogueItem,
		expanded ? getExpandedStyle(columns) : '',
	);

	// Derived from the circle context here at the leaf.
	const iconClassName = classNames(
		styles.techCatalogueIcon,
		circle
			? styles.techCatalogueIconCircle
			: styles.softwareCatalogueIconRounded,
	);

	return (
		// The grid column class only applies in the expanded layout.
		<li className={itemClassName} data-tooltip={label}>
			<img alt={`${label} Logo Icon`} className={iconClassName} src={image} />
			{expanded && <p className={styles.label}>{label}</p>}
		</li>
	);
};

type TechCatalogueItemProps = TechCatalogueItemData & {
	columns: number;
	expanded: boolean;
};
