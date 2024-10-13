import React from 'react';

import { ProjectGallery } from '../ProjectsPage/ProjectGallery/ProjectGallery';

import { FILTER_LIST, PROJECTS_DATA } from './ArtPage.data';

const projectLink = '/art-project';

export const ArtPage = () => {
	return (
		<ProjectGallery
			filterList={FILTER_LIST}
			projectLink={projectLink}
			projectsData={PROJECTS_DATA}
		/>
	);
};
