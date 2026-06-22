import React from 'react';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';

import styles from './ButtonLink.module.scss';

export const ButtonLink = ({ href, text }: ButtonLinkProps) => {
	return (
		<ExternalLink className={styles.buttonLink} href={href}>
			{text}
		</ExternalLink>
	);
};

type ButtonLinkProps = {
	href: string;
	text: string;
};
