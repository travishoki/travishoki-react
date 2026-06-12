import React, { ReactNode } from 'react';

import classNames from 'classnames';

import styles from './ImageContainer.module.scss';

export const ImageContainer = ({
	children,
	className,
}: ImageContainerProps) => (
	<div className={classNames(styles.imageContainer, className)}>{children}</div>
);

type ImageContainerProps = {
	children: ReactNode;
	className?: string;
};
