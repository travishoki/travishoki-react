import React from 'react';

import { TechCatalogue } from '~components/TechCatalogue/TechCatalogue';
import { TechCatalogueItemData } from '~components/TechCatalogue/TechCatalogue.types';
import { TECH, TechKey } from '~const/Tech.const';

type TechListProps = {
	header?: string;
	initialExpanded?: boolean;
	itemClassName?: string;
	list: TechKey[];
};

export const TechListCatalogue = ({
	header = 'Tech Stack',
	initialExpanded = false,
	itemClassName,
	list,
}: TechListProps) => {
	const items: TechCatalogueItemData[] = list.map((tech) => ({
		...TECH[tech],
	}));

	return (
		<TechCatalogue
			circle
			header={header}
			initialExpanded={initialExpanded}
			itemClassName={itemClassName}
			items={items}
		/>
	);
};
