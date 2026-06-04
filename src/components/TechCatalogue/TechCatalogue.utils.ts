import { TechCatalogueItemData, TechType } from './TechCatalogue';

export const EMPTY_GROUP_BY_TYPE: Record<TechType, TechCatalogueItemData[]> = {
	backend: [],
	cms: [],
	design: [],
	frontend: [],
	illustration: [],
	integrations: [],
	legacy: [],
	tool: [],
	video: [],
};

export const groupTechByType = (items: TechCatalogueItemData[]) =>
	items.reduce<Record<TechType, TechCatalogueItemData[]>>(
		(acc, item) => {
			const type = item.type ?? 'frontend';
			acc[type].push(item);

			return acc;
		},
		Object.fromEntries(
			Object.entries(EMPTY_GROUP_BY_TYPE).map(([key, val]) => [key, [...val]]),
		) as Record<TechType, TechCatalogueItemData[]>,
	);
