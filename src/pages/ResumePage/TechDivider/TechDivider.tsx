import React from 'react';

import styles from './TechDivider.module.scss';

export const TechDivider = ({ text }: TechDividerProps) => {
	return <h2 className={styles.techDivider}>{text}</h2>;
};

type TechDividerProps = {
	text: string;
};
