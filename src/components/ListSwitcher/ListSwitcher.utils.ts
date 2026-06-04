import { ListSwitcherItemData, TechType } from './ListSwitcher';

export const EMPTY_GROUP_BY_TYPE: Record<TechType, ListSwitcherItemData[]> = {
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

export const groupTechByType = (items: ListSwitcherItemData[]) =>
	items.reduce<Record<TechType, ListSwitcherItemData[]>>(
		(acc, item) => {
			const type = item.type ?? 'frontend';
			acc[type].push(item);

			return acc;
		},
		Object.fromEntries(
			Object.entries(EMPTY_GROUP_BY_TYPE).map(([key, val]) => [key, [...val]]),
		) as Record<TechType, ListSwitcherItemData[]>,
	);
