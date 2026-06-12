import React from 'react';

import { getImgAltText } from '~helpers/images';

import { ProjectImageCarousel } from './ProjectGallery/ProjectImageCarousel';
import { ProjectHeader } from './ProjectHeader/ProjectHeader';
import { ProjectImage } from './ProjectImage/ProjectImage';
import { ProjectInfoSection } from './ProjectInfoSection/ProjectInfoSection';
import { ViewLiveSite } from './ViewLiveSite/ViewLiveSite';
import { ProjectType } from '../../ProjectsPage/ProjectsPage.types';

import styles from './ProjectContent.module.scss';

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

	const imgAlt = getImgAltText(company, subtitle);

	return (
		<div className={styles.projectContent}>
			<ProjectHeader company={company} subtitle={subtitle} />

			<div className="row">
				<div className="col-sm-5">
					{gallery && gallery.length > 1 ? (
						<ProjectImageCarousel
							company={company}
							gallery={gallery}
							subtitle={subtitle}
						/>
					) : (
						<ProjectImage alt={imgAlt} itemKey={itemKey} />
					)}
				</div>
				<div className="col-sm-7">
					<ProjectInfoSection
						company={company}
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
