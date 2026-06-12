import React, { ReactNode } from 'react';

import styles from './ItemLink.module.scss';

export const ItemLink = ({ children, href, title }: ItemLinkProps) => {
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

type ItemLinkProps = {
	children: ReactNode;
	href: string;
	title: string;
};
