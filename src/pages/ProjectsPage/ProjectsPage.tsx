import React from 'react';
import { ProjectGallery } from './ProjectGallery/ProjectGallery';
import { FILTER_LIST, PROJECTS_DATA } from './ProjectsPage.data';

const projectLink = '/project';

export const ProjectsPage = () => {
	return (
		<ProjectGallery
			filterList={FILTER_LIST}
			projectLink={projectLink}
			projectsData={PROJECTS_DATA}
		/>
	);
};
