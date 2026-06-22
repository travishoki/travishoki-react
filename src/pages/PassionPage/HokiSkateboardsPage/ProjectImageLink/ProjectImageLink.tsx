import React from 'react';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';

import { ProjectImage } from '../ProjectImage/ProjectImage';

import styles from './ProjectImageLink.module.scss';

export const ProjectImageLink = ({
	alt,
	href,
	src,
	title,
}: ProjectImageLinkProps) => (
	<div className={styles.wrapper}>
		<ExternalLink className={styles.link} href={href} title={title}>
			<ProjectImage alt={alt} src={src} />
		</ExternalLink>
	</div>
);

type ProjectImageLinkProps = {
	alt: string;
	href: string;
	src: string;
	title: string;
};
