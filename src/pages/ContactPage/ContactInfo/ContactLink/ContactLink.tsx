import React from 'react';

import { ExternalLinkProps } from '~types/Link.types';

import styles from './ContactLink.module.scss';

export const ContactLink = ({ children, href, title }: ExternalLinkProps) => (
	<a
		className={styles.contactLink}
		href={href}
		rel="noreferrer"
		target="_blank"
		title={title}
	>
		{children}
	</a>
);
