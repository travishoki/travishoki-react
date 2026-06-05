import React from 'react';

import { ProjectType } from '../../ProjectsPage/ProjectsPage.types';
import { ProjectHeader } from './ProjectHeader/ProjectHeader';
import { ProjectInfoSection } from './ProjectInfoSection/ProjectInfoSection';
import { ViewLiveSite } from './ViewLiveSite/ViewLiveSite';
import { ProjectImage } from './ProjectImage/ProjectImage';
import './ProjectContent.scss';

export const ProjectContent = ({
	company,
	companySlug,
	contributions,
	date,
	description,
	itemKey,
	learned,
	live = false,
	subtitle,
	techs,
	url,
}: ProjectContentProps) => (
	<div className="project-content">
		<ProjectHeader company={company} subtitle={subtitle} />

		<div className="row">
			<div className="col-sm-6">
				<ProjectImage itemKey={itemKey} />
			</div>
			<ProjectInfoSection
				companySlug={companySlug}
				contributions={contributions}
				date={date}
				description={description}
				learned={learned}
				techs={techs}
			/>
		</div>

		{live && <ViewLiveSite url={url} />}
	</div>
);

type ProjectContentProps = ProjectType;
