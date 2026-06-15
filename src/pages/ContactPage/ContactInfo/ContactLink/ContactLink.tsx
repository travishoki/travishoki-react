import React, { ReactNode } from 'react';

import styles from './ContactLink.module.scss';

export const ContactLink = ({ children, href, title }: ContactLinkProps) => (
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

type ContactLinkProps = {
	children: ReactNode;
	href: string;
	title: string;
};
