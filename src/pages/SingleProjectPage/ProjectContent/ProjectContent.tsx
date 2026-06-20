import React, { useState } from 'react';

import { ImageGallery } from '~components/ImageGallery/ImageGallery';
import { formatGalleryImage } from '~components/ImageGallery/ImageGallery.helpers';
import { ImageMaximizable } from '~components/ImageModal/ImageMaximizable/ImageMaximizable';
import { getImgAltText } from '~helpers/images';

import { ProjectHeader } from './ProjectHeader/ProjectHeader';
import { ProjectInfoSection } from './ProjectInfoSection/ProjectInfoSection';
import { ProjectType } from '../../ProjectsPage/ProjectsPage.types';

const DEFAULT_DIMENSIONS = [0, 0];

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
	const [dimensions, setDimensions] = useState(DEFAULT_DIMENSIONS);

	const images = gallery.map((image) => {
		const obj = formatGalleryImage(image);

		return {
			...obj,
			alt: obj.alt ?? getImgAltText(company, subtitle),
		};
	});

	return (
		<>
			<ProjectHeader company={company} subtitle={subtitle} />

			<div className="row">
				<div className="col-sm-5">
					{gallery.length > 1 ? (
						<ImageGallery images={images} />
					) : (
						<ImageMaximizable
							alt={images[0].alt}
							dimensions={dimensions}
							setDimensions={setDimensions}
							src={images[0].filename}
						/>
					)}
				</div>
				<div className="col-sm-7">
					<ProjectInfoSection project={project} />
				</div>
			</div>
		</>
	);
};

type ProjectContentProps = {
	project: ProjectType;
};
