import React from 'react';
import { useParams } from 'react-router-dom';

import { ProjectItemList } from '../ProjectsPage/ProjectItemList/ProjectItemList';
import { PROJECTS_DATA } from '../ProjectsPage/ProjectsPage.data';

import { BackButton } from './BackButton/BackButton';

export const SingleProjectPage = () => {
	const { paramItemKey } = useParams();
	const singleProject = PROJECTS_DATA.find(
		(project) => project.itemKey === paramItemKey,
	);

	if (!singleProject) return;

	return (
		<div className="projects" id="container">
			<div className="projects-container grid">
				<BackButton />
				<ProjectItemList {...singleProject} />
			</div>
		</div>
	);
};
