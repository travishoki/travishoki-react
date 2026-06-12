import React, { ReactNode } from 'react';

import styles from './ImageContainer.module.scss';

export const ImageContainer = ({ children }: ImageContainerProps) => (
	<div className={styles['image-container']}>{children} </div>
);

type ImageContainerProps = {
	children: ReactNode;
};
