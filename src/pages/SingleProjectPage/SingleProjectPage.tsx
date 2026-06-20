import React from 'react';

import classNames from 'classnames';
import { useParams } from 'react-router-dom';

import { PageSeo } from '~components/PageSeo/PageSeo';

import { BackButton } from './BackButton/BackButton';
import { ProjectContent } from './ProjectContent/ProjectContent';
import { getSeoData } from './SingleProjectPage.helpers';
import { PROJECTS_DATA } from '../ProjectsPage/ProjectsPage.data';

import styles from './SingleProjectPage.module.scss';

export const SingleProjectPage = () => {
	const { paramItemKey } = useParams();
	const singleProject = PROJECTS_DATA.find(
		(project) => project.itemKey === paramItemKey,
	);

	if (!singleProject) return;

	return (
		<div
			className={classNames('projects', styles.singleProjectPage)}
			id="container"
		>
			<PageSeo seoData={getSeoData(singleProject)} />
			<div className={classNames(styles.singleProjectsContainer, 'grid')}>
				<BackButton />
				<ProjectContent project={singleProject} />
			</div>
		</div>
	);
};
