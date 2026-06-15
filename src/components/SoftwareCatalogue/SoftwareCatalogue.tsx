import React from 'react';

import { TechCatalogue } from '~components/TechCatalogue/TechCatalogue';
import { TechCatalogueItemData } from '~components/TechCatalogue/TechCatalogue.types';
import { SOFTWARE, SoftwareKey } from '~const/Software.const';

export const SoftwareCatalogue = ({
	list,
	title = 'Software',
}: SoftwareListProps) => {
	const items: TechCatalogueItemData[] = list.map((software) => ({
		image: SOFTWARE[software].image,
		label: SOFTWARE[software].label,
		type: SOFTWARE[software].type,
	}));

	return <TechCatalogue items={items} title={title} />;
};

type SoftwareListProps = {
	list: SoftwareKey[];
	title?: string;
};
