import React, { ReactNode } from 'react';

import styles from './PassionLabel.module.scss';

export const PassionLabel = ({ children }: PassionLabelProps) => (
	<p className={`${styles.passionLabel} mb-1`}>{children}</p>
);

type PassionLabelProps = {
	children: ReactNode;
};
