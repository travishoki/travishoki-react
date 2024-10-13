import React from 'react';
import { ProjectGallery } from './ProjectGallery/ProjectGallery';
import { FILTER_LIST } from './ProjectsPage.data';

export const ProjectsPage = () => {
	return <ProjectGallery filterList={FILTER_LIST} />;
};
