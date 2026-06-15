import React from 'react';

import classnames from 'classnames';

import { TechCatalogueItemData } from '../../TechCatalogue.types';
import { useItemClassName } from '../../TechCatalogueContext';
import { TechCatalogueItem } from './TechCatalogueItem/TechCatalogueItem';

export const TechCatalogueList = ({
	expanded,
	items,
}: TechCatalogueListProps) => {
	const itemClassName = useItemClassName();

	if (items.length === 0) return null;

	return (
		// The Bootstrap grid (row/col) is only used in the expanded layout; the
		// collapsed layout is a plain horizontal flex row of icons.
		<ul className={classnames({ row: expanded && itemClassName })}>
			{items.map((item, index) => (
				<TechCatalogueItem key={index} expanded={expanded} {...item} />
			))}
		</ul>
	);
};

type TechCatalogueListProps = {
	expanded: boolean;
	items: TechCatalogueItemData[];
};
