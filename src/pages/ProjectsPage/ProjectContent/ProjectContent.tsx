import React from 'react';

import { ProjectType } from '../ProjectsPage.data';
import { ProjectHeader } from './ProjectHeader';
import { ProjectInfoSection } from './ProjectInfoSection/ProjectInfoSection';
import { ViewLiveSite } from './ViewLiveSite';
import './ProjectContent.scss';

const images = require.context('../../../images/websites', true);

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
				<img className="project-img" src={images(`./${itemKey}/lg.jpg`)} />
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
