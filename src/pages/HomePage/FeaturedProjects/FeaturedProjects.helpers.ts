import { ProjectItemKey } from 'src/pages/ProjectsPage/ProjectsPage.itemKeys';
import { ProjectType } from 'src/pages/ProjectsPage/ProjectsPage.types';

export const FEATURED_ITEM_KEYS: ProjectItemKey[] = [
	'food-cards',
	'hoki-skateboards-react-native-game',
	'spiff-translations',
];

export const orderTopThreeInPodium = (list: ProjectType[]) => {
	/* eslint-disable-next-line no-magic-numbers */
	if (list.length < 3) return list;

	return [list[1], list[0], list[2]];
};
