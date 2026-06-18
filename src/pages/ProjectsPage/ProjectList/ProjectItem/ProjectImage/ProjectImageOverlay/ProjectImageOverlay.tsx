import React from 'react';

import { Link } from 'react-router-dom';

import { ProjectLink } from './ProjectLink/ProjectLink';
import { CLIENT_LOGOS } from '../../../../ProjectsPage.ClientLogos.data';

import styles from './ProjectImageOverlay.module.scss';

export const ProjectImageOverlay = ({
	company,
	companySlug,
	itemKey,
	projectLink,
}: ProjectImageOverlayProps) => (
	<div className={styles.projectImageOverlay}>
		<Link to={`${projectLink}/${itemKey}`}>
			<div className={styles.projectImageOverlayInner}>
				<div className={styles.projectImageOverlayContent}>
					<img alt={company} className="mb-2" src={CLIENT_LOGOS[companySlug]} />
					<ProjectLink />
				</div>
				<div className={styles.projectImageOverlayOverlay} />
			</div>
		</Link>
	</div>
);

type ProjectImageOverlayProps = {
	company: string;
	companySlug: string;
	itemKey: string;
	projectLink: string;
};
