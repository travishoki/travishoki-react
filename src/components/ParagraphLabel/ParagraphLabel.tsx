import React, { ReactNode } from 'react';

import styles from './ParagraphLabel.module.scss';

export const ParagraphLabel = ({ children }: ParagraphLabelProps) => (
	<p className={`${styles.paragraphLabel} mb-1`}>{children}</p>
);

type ParagraphLabelProps = {
	children: ReactNode;
};
