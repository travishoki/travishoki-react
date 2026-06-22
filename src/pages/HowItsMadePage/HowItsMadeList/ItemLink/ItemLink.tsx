import React from 'react';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';
import { ExternalLinkProps } from '~types/Link.types';

import styles from './ItemLink.module.scss';

export const ItemLink = ({ children, href, title }: ExternalLinkProps) => {
	return (
		<ExternalLink className={styles.itemLink} href={href} title={title}>
			{children}
		</ExternalLink>
	);
};
