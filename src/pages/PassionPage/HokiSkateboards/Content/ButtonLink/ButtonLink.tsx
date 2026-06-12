import React from 'react';

import styles from './ButtonLink.module.scss';

export const ButtonLink = ({ text }: ButtonLinkProps) => {
	return <p className={styles.buttonLink}>{text}</p>;
};

type ButtonLinkProps = {
	text: string;
};
