import React, { ReactNode } from 'react';

import styles from './ImageContainer.module.scss';

export const ImageContainer = ({ children }: ImageContainerProps) => (
	<div className={styles.imageContainer}>{children} </div>
);

type ImageContainerProps = {
	children: ReactNode;
};
