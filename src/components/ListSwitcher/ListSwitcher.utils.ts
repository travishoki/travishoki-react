import { ListSwitcherItemData, TechType } from './ListSwitcher';

export const groupTechByType = (items: ListSwitcherItemData[]) =>
	items.reduce<Record<TechType, ListSwitcherItemData[]>>(
		(acc, item) => {
			const type = item.type ?? 'frontend';
			acc[type].push(item);

			return acc;
		},
		{
			backend: [],
			cms: [],
			design: [],
			frontend: [],
			illustration: [],
			integrations: [],
			legacy: [],
			tool: [],
			video: [],
		},
	);
