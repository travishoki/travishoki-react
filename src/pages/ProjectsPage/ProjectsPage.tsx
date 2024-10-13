import React from 'react';
import { ProjectGallery } from './ProjectGallery/ProjectGallery';
import { FILTER_LIST, PROJECTS_DATA } from './ProjectsPage.data';

export const ProjectsPage = () => {
	return (
		<ProjectGallery filterList={FILTER_LIST} projectsData={PROJECTS_DATA} />
	);
};
