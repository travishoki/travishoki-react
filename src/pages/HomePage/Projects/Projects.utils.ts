import { ProjectType } from 'src/pages/ProjectsPage/ProjectsPage.data';

export const orderTopThreeInPodium = (list: ProjectType[]) => {
	if (list.length < 3) return list;

	return [list[1], list[0], list[2]];
};
