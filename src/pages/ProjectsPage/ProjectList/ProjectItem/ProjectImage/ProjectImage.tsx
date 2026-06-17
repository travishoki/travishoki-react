import React from 'react';

import classNames from 'classnames';

import { getImgAltText } from '~helpers/images';
import {
	handleThumbnailError,
	websiteThumbnailSrc,
} from '~helpers/websiteThumbnails';

import { ProjectImageOverlay } from './ProjectImageOverlay/ProjectImageOverlay';

import styles from './ProjectImage.module.scss';

export const ProjectImage = ({
	className,
	company,
	companySlug,
	itemKey,
	projectLink,
	subtitle,
}: ProjectImageProps) => {
	const imgAlt = getImgAltText(company, subtitle);

	return (
		<div className={classNames(styles.projectImageWithPopup, className)}>
			<ProjectImageOverlay
				company={company}
				companySlug={companySlug}
				itemKey={itemKey}
				projectLink={projectLink}
			/>
			<img
				alt={imgAlt}
				className={styles.img}
				onError={handleThumbnailError}
				src={websiteThumbnailSrc(itemKey)}
			/>
		</div>
	);
};

type ProjectImageProps = {
	className?: string;
	company: string;
	companySlug: string;
	itemKey: string;
	projectLink: string;
	subtitle?: string;
};
