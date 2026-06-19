import { ROUTES } from '~const/Routes.const';

import { ProjectType } from '../ProjectsPage/ProjectsPage.types';

export const getSeoData = (project: ProjectType) => ({
	canonical: `${ROUTES.PROJECT}/${project.itemKey}`,
	description: Array.isArray(project.description)
		? project.description[0]
		: project.description,
	title: project.company,
});
