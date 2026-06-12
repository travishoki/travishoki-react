import React from 'react';

import { Link } from 'react-router-dom';

import { ProjectLink } from './ProjectLink/ProjectLink';

import styles from './ProjectImageOverlay.module.scss';

type ProjectImageOverlayProps = {
	companySlug: string;
	itemKey: string;
	projectLink: string;
};

const logos = require.context('../../../../images/clients', true);

export const ProjectImageOverlay = ({
	companySlug,
	itemKey,
	projectLink,
}: ProjectImageOverlayProps) => (
	<div className={styles.popup}>
		<Link to={`${projectLink}/${itemKey}`}>
			<div className={styles.popupInner}>
				<div className={styles.popupContent}>
					<img src={logos(`./${companySlug}.jpg`)} />
					<ProjectLink />
				</div>
				<div className={styles.popupOverlay} />
			</div>
		</Link>
	</div>
);
