import React, { ReactNode } from 'react';

import styles from './InfoBox.module.scss';

export const InfoBox = ({ children }: InfoBoxProps) => (
	<div className={styles.infoBox}>{children}</div>
);

type InfoBoxProps = {
	children: ReactNode;
};
