import React from 'react';

import styles from './ItemLink.module.scss';

export const ItemLink = ({ link, title }: ItemLinkProps) => {
	return (
		<a
			className={styles.link}
			href={link}
			rel="noreferrer"
			target="_blank"
			title={title}
		>
			<i className="fa fa-link" />
		</a>
	);
};

type ItemLinkProps = {
	link: string;
	title: string;
};
