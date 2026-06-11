import React, { ReactNode } from 'react';

import classNames from 'classnames';

import styles from './Panels.module.scss';

export const Panels = ({ children, className, reverse }: PanelsProps) => (
	<div
		className={classNames(
			styles.panels,
			{ [styles.reverse]: reverse },
			className,
		)}
	>
		{children}
	</div>
);

type PanelsProps = {
	children: ReactNode;
	className?: string;
	reverse?: boolean;
};
