import React from 'react';

import classnames from 'classnames';

import { TechCatalogueItemData } from '../../TechCatalogue.types';
import { TechCatalogueItem } from './TechCatalogueItem/TechCatalogueItem';

type TechCatalogueListProps = {
	expanded: boolean;
	iconClass: string;
	itemClassName?: string;
	items: TechCatalogueItemData[];
};

export const TechCatalogueList = ({
	expanded,
	iconClass,
	itemClassName,
	items,
}: TechCatalogueListProps) => {
	if (items.length === 0) return null;

	return (
		<ul className={classnames({ row: itemClassName })}>
			{items.map((item, index) => (
				<TechCatalogueItem
					key={index}
					expanded={expanded}
					iconClass={iconClass}
					itemClassName={itemClassName}
					{...item}
				/>
			))}
		</ul>
	);
};
