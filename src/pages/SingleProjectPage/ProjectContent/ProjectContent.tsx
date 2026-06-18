import React from 'react';

import { ImageGallery } from '~components/ImageGallery/ImageGallery';
import { formatGalleryImage } from '~components/ImageGallery/ImageGallery.helpers';
import { getImgAltText } from '~helpers/images';

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
		learned,
		live = false,
		subtitle,
		techs,
		url,
	} = project;

	const images = gallery.map((image) => {
		const obj = formatGalleryImage(image);

		return {
			...obj,
			alt: obj.alt ?? getImgAltText(company, subtitle),
		};
	});

	return (
		<div className={styles.projectContent}>
			<ProjectHeader company={company} subtitle={subtitle} />

			<div className="row">
				<div className="col-sm-5">
					{gallery.length > 1 ? (
						<ImageGallery images={images} />
					) : (
						<ProjectImage alt={images[0].alt} filename={images[0].filename} />
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
