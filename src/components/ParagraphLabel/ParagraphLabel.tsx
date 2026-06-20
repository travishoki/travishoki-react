import React, { ReactNode } from 'react';

import classNames from 'classnames';

import styles from './ParagraphLabel.module.scss';

export const ParagraphLabel = ({ children }: ParagraphLabelProps) => (
	<p className={classNames(styles.paragraphLabel, 'mb-1')}>{children}</p>
);

type ParagraphLabelProps = {
	children: ReactNode;
};
