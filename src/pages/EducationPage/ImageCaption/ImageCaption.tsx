import React, { ReactNode } from 'react';

import styles from './ImageCaption.module.scss';

export const ImageCaption = ({ children }: ImageCaptionProps) => {
	return <div className={styles.imageCaption}>{children}</div>;
};

type ImageCaptionProps = {
	children: ReactNode;
};
