import React from 'react';

import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';
import { ExternalLinkProps } from '~types/Link.types';

import styles from './ContactLink.module.scss';

export const ContactLink = ({
	children,
	href,
	icon,
	title,
}: ContactLinkProps) => (
	<ExternalLink className={styles.contactLink} href={href} title={title}>
		<div className={styles.content}>{children}</div>
		<div className={styles.icon}>
			<FontAwesomeIcon className={styles.iconSvg} icon={icon} />
		</div>
	</ExternalLink>
);

type ContactLinkProps = {
	icon: IconDefinition;
} & ExternalLinkProps;
