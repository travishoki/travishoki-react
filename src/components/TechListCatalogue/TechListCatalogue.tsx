import React from 'react';

import { TechCatalogue } from '~components/TechCatalogue/TechCatalogue';
import { TechCatalogueItemData } from '~components/TechCatalogue/TechCatalogue.types';
import { TECH, TechKey } from '~const/Tech.const';

export const TechListCatalogue = ({
	initialExpanded = false,
	list,
	title = 'Tech Stack',
}: TechListProps) => {
	const items: TechCatalogueItemData[] = list.map((tech) => ({
		...TECH[tech],
	}));

	return (
		<TechCatalogue
			circle
			initialExpanded={initialExpanded}
			items={items}
			title={title}
		/>
	);
};

type TechListProps = {
	initialExpanded?: boolean;
	list: TechKey[];
	title?: string;
};
