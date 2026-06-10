import React from 'react';

import { ProjectImageCarousel } from './ProjectGallery/ProjectImageCarousel';
import { ProjectHeader } from './ProjectHeader/ProjectHeader';
import { ProjectImage } from './ProjectImage/ProjectImage';
import { ProjectInfoSection } from './ProjectInfoSection/ProjectInfoSection';
import { ViewLiveSite } from './ViewLiveSite/ViewLiveSite';
import { ProjectType } from '../../ProjectsPage/ProjectsPage.types';

import './ProjectContent.scss';

export const ProjectContent = ({ project }: ProjectContentProps) => {
	const {
		company,
		companySlug,
		contributions,
		date,
		description,
		gallery,
		itemKey,
		learned,
		live = false,
		subtitle,
		techs,
		url,
	} = project;

	return (
		<div className="project-content">
			<ProjectHeader company={company} subtitle={subtitle} />

			<div className="row">
				<div className="col-sm-5">
					{gallery && gallery.length > 1 ? (
						<ProjectImageCarousel gallery={gallery} />
					) : (
						<ProjectImage itemKey={itemKey} />
					)}
				</div>
				<div className="col-sm-7">
					<ProjectInfoSection
						companySlug={companySlug}
						contributions={contributions}
						date={date}
						description={description}
						learned={learned}
						techs={techs}
					/>
				</div>
			</div>

			{live && <ViewLiveSite url={url} />}
		</div>
	);
};

type ProjectContentProps = {
	project: ProjectType;
};
