import React, { ReactNode } from 'react';

import styles from './ImageCaption.module.scss';

export const ImageCaption = ({ children }: ImageCaptionProps) => {
	return <div className={styles['image-caption']}>{children}</div>;
};

type ImageCaptionProps = {
	children: ReactNode;
};
