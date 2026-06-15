import React, { useLayoutEffect, useRef, useState } from 'react';

import classnames from 'classnames';

import { TechCatalogueItemData } from '../../TechCatalogue.types';
import { TechCatalogueItem } from './TechCatalogueItem/TechCatalogueItem';
import { clamp } from './TechCatalogueItem/TechCatalogueItem.helpers';
import { MAX_ITEM_WIDTH } from './TechCatalogueList.const';

import styles from './TechCatalogueList.module.scss';

export const TechCatalogueList = ({
	expanded,
	items,
}: TechCatalogueListProps) => {
	const ulRef = useRef(null);

	const [columns, setColumns] = useState(1);

	useLayoutEffect(() => {
		if (!ulRef.current) return;

		const { clientWidth } = ulRef.current;

		const newColumns = clamp(Math.floor(clientWidth / MAX_ITEM_WIDTH));
		setColumns(newColumns);
	}, []);

	if (items.length === 0) return null;

	return (
		<ul
			className={classnames(
				styles.techCatalogueList,
				expanded
					? styles.techCatalogueListExpanded
					: styles.techCatalogueListCollapsed,
			)}
			ref={ulRef}
		>
			{items.map((item, index) => (
				<TechCatalogueItem
					key={index}
					columns={columns}
					expanded={expanded}
					{...item}
				/>
			))}
		</ul>
	);
};

type TechCatalogueListProps = {
	expanded: boolean;
	items: TechCatalogueItemData[];
};
