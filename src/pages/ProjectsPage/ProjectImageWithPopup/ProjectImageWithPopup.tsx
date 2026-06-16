import React from 'react';

import classNames from 'classnames';

import { getImgAltText } from '~helpers/images';
import {
	handleWebsiteImageError,
	websiteImageSrc,
} from '~helpers/websiteImages';

import { ProjectImageOverlay } from './ProjectImageOverlay/ProjectImageOverlay';

import styles from './ProjectImageWithPopup.module.scss';

export const ProjectImageWithPopup = ({
	className,
	company,
	companySlug,
	itemKey,
	projectLink,
	subtitle,
}: ProjectImageWithPopupProps) => {
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
				onError={handleWebsiteImageError('thumbnail')}
				src={websiteImageSrc(itemKey, 'thumbnail')}
			/>
		</div>
	);
};

type ProjectImageWithPopupProps = {
	className?: string;
	company: string;
	companySlug: string;
	itemKey: string;
	projectLink: string;
	subtitle?: string;
};
