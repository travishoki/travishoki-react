import React from 'react';

import classNames from 'classnames';

import { TechCatalogueItemData } from '~components/TechCatalogue/TechCatalogue.types';

import { TechCatalogueItem } from './TechCatalogueItem/TechCatalogueItem';

import styles from './TechCatalogueList.module.scss';

export const TechCatalogueList = ({
	expanded,
	items,
}: TechCatalogueListProps) => {
	if (items.length === 0) return null;

	return (
		<ul
			className={classNames(
				styles.techCatalogueList,
				expanded
					? styles.techCatalogueListExpanded
					: styles.techCatalogueListCollapsed,
			)}
		>
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
