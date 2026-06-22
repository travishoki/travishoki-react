import React from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ExternalLinkProps } from '~types/Link.types';

import styles from './ContactLink.module.scss';

export const ContactLink = ({
	children,
	href,
	icon,
	title,
}: ContactLinkProps) => (
	<a
		className={styles.contactLink}
		href={href}
		rel="noreferrer"
		target="_blank"
		title={title}
	>
		{children}
		<div className={styles.icon}>
			<FontAwesomeIcon className={styles.iconSvg} icon={icon} />
		</div>
	</a>
);

type ContactLinkProps = {
	icon: IconDefinition;
} & ExternalLinkProps;
