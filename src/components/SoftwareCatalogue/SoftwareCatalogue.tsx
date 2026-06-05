import React from 'react';

import { TechCatalogue } from '~components/TechCatalogue/TechCatalogue';
import { TechCatalogueItemData } from '~components/TechCatalogue/TechCatalogue.types';
import { SOFTWARE, SoftwareKey } from '~const/Software.const';

type SoftwareListProps = {
	header?: string;
	itemClassName?: string;
	list: SoftwareKey[];
};

export const SoftwareCatalogue = ({
	header = 'Software',
	itemClassName,
	list,
}: SoftwareListProps) => {
	const items: TechCatalogueItemData[] = list.map((software) => ({
		image: SOFTWARE[software].image,
		label: SOFTWARE[software].label,
		type: SOFTWARE[software].type,
	}));

	return (
		<TechCatalogue
			header={header}
			itemClassName={itemClassName}
			items={items}
		/>
	);
};
