import React from 'react';

import { ProjectGallery } from '../ProjectsPage/ProjectGallery/ProjectGallery';

import { FILTER_LIST, PROJECTS_DATA } from './ArtPage.data';

export const ArtPage = () => {
	return (
		<ProjectGallery filterList={FILTER_LIST} projectsData={PROJECTS_DATA} />
	);
};
