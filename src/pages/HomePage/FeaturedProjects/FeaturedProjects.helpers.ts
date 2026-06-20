import { ProjectType } from 'src/pages/ProjectsPage/ProjectsPage.types';

export const FEATURED_ITEM_KEYS = [
	'hoki-skateboards-react-native-game',
	'spiff-documents',
	'spiff-translations',
];

export const PODIUM_COUNT = FEATURED_ITEM_KEYS.length;

export const orderTopThreeInPodium = (list: ProjectType[]) => {
	if (list.length < PODIUM_COUNT) return list;

	return [list[1], list[0], list[2]];
};
