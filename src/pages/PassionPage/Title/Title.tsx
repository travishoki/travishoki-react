import React from 'react';

import styles from './Title.module.scss';

export const Title = ({ title }: TitleProps) => (
	<h2 className={styles.title}>{title}</h2>
);

type TitleProps = {
	title: string;
};
