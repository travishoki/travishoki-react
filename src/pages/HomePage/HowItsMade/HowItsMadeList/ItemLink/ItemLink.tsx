import React from 'react';

import { ExternalLinkProps } from '~types/Link.types';

import styles from './ItemLink.module.scss';

export const ItemLink = ({ children, href, title }: ExternalLinkProps) => {
	return (
		<a
			className={styles.itemLink}
			href={href}
			rel="noreferrer"
			target="_blank"
			title={title}
		>
			{children}
		</a>
	);
};
