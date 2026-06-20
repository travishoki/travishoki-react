import React from 'react';

import classNames from 'classnames';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

import { Contributions } from './Contributions/Contributions';
import { ProjectInfo } from './ProjectInfo/ProjectInfo';
import { ViewLiveSite } from './ViewLiveSite/ViewLiveSite';
import { CLIENT_LOGOS } from '../../../ProjectsPage/ProjectsPage.ClientLogos.data';
import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';

import styles from './ProjectInfoSection.module.scss';

export const ProjectInfoSection = ({ project }: ProjectInfoSectionProps) => {
	const {
		aiIntegration,
		company,
		companySlug,
		contributions,
		date,
		description,
		learned,
		live = false,
		techs,
		url,
	} = project;

	return (
		<>
			<img
				alt={company}
				className={classNames('center mb-3', styles.logo)}
				src={CLIENT_LOGOS[companySlug]}
			/>

			{aiIntegration && (
				<div className={styles.aiIntegration}>
					<ProjectInfo label="AI Integration" text={aiIntegration} />
				</div>
			)}

			{date && <ProjectInfo label="Date Range" text={date} />}

			{description.length && (
				<ProjectInfo label="Description" text={description} />
			)}

			<Contributions contributions={contributions} />

			{learned && <ProjectInfo label="What I Learned" text={learned} />}

			{live && <ViewLiveSite url={url} />}

			{techs && techs.length > 0 && (
				<TechListCatalogue initialExpanded list={techs} />
			)}
		</>
	);
};

type ProjectInfoSectionProps = {
	project: ProjectType;
};
