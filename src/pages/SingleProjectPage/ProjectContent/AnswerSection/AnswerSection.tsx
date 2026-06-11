import React, { ReactNode } from 'react';

import styles from './AnswerSection.module.scss';

export const AnswerSection = ({ children }: AnswerSectionProps) => {
	return <div className={styles['answer-section']}>{children}</div>;
};

type AnswerSectionProps = {
	children: ReactNode;
};
