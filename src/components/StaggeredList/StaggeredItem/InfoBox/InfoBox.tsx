import React, { ReactNode } from 'react';

import styles from './InfoBox.module.scss';

export const InfoBox = ({ children }: InfoBoxProps) => (
	<div className={styles['info-box']}>{children}</div>
);

type InfoBoxProps = {
	children: ReactNode;
};
