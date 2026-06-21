import React from 'react';

import { AitInfo } from '~components/AiInfo/AiInfo';
import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

import { Contributions } from './Contributions/Contributions';
import { ProjectInfo } from './ProjectInfo/ProjectInfo';
import { ViewLiveSite } from './ViewLiveSite/ViewLiveSite';
import { ProjectType } from '../../../ProjectsPage/ProjectsPage.types';

export const ProjectInfoSection = ({ project }: ProjectInfoSectionProps) => {
	const {
		aiIntegration,
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
			{aiIntegration && <AitInfo className="mb-3" text={aiIntegration} />}

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
