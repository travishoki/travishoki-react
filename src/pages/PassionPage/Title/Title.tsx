import React from 'react';

import classNames from 'classnames';

import styles from './Title.module.scss';

export const Title = ({ className, title }: TitleProps) => (
	<h2 className={classNames(styles.title, className)}>{title}</h2>
);

type TitleProps = {
	className?: string;
	title: string;
};
