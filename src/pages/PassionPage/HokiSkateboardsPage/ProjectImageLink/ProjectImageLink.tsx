import React from 'react';

import { ProjectImage } from '../ProjectImage/ProjectImage';

import styles from './ProjectImageLink.module.scss';

export const ProjectImageLink = ({
	alt,
	href,
	src,
	title,
}: ProjectImageLinkProps) => (
	<div className={styles.wrapper}>
		<a
			className={styles.link}
			href={href}
			rel="noreferrer"
			target="_blank"
			title={title}
		>
			<ProjectImage alt={alt} src={src} />
		</a>
	</div>
);

type ProjectImageLinkProps = {
	alt: string;
	href: string;
	src: string;
	title: string;
};
