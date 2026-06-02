import { ListSwitcherItemData } from './ListSwitcher';

export const splitByLegacy = (items: ListSwitcherItemData[]) =>
	items.reduce<{
		currentTech: ListSwitcherItemData[];
		legacyTech: ListSwitcherItemData[];
	}>(
		(acc, item) => {
			if (item.legacy) {
				acc.legacyTech.push(item);
			} else {
				acc.currentTech.push(item);
			}

			return acc;
		},
		{ currentTech: [], legacyTech: [] },
	);
