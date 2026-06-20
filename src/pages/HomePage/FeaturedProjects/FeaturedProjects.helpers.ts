import { ProjectType } from 'src/pages/ProjectsPage/ProjectsPage.types';

export const PODIUM_COUNT = 3;

export const orderTopThreeInPodium = (list: ProjectType[]) => {
	if (list.length < PODIUM_COUNT) return list;

	return [list[1], list[0], list[2]];
};
