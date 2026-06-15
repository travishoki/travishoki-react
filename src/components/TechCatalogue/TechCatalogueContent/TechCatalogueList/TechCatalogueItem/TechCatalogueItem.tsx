import React from 'react';

import classNames from 'classnames';

import { TechCatalogueItemContent } from './TechCatalogueItemContent/TechCatalogueItemContent';
import { TechCatalogueItemData } from '../../../TechCatalogue.types';
import { useItemClassName } from '../../../TechCatalogueContext';

import styles from './TechCatalogueItem.module.scss';

export const TechCatalogueItem = ({
	expanded,
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
				<TechCatalogueItemContent
					expanded={expanded}
					image={image}
					label={label}
				/>
			</div>
		</li>
	);
};

type TechCatalogueItemProps = TechCatalogueItemData & {
	expanded: boolean;
};
