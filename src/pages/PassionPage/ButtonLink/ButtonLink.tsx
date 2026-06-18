import React from 'react';

import styles from './ButtonLink.module.scss';

export const ButtonLink = ({ href, text }: ButtonLinkProps) => {
	return (
		<a
			className={styles.buttonLink}
			href={href}
			rel="noreferrer"
			target="_blank"
		>
			{text}
		</a>
	);
};

type ButtonLinkProps = {
	href: string;
	text: string;
};
