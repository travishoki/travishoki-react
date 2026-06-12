import React, { ReactNode } from 'react';

import classNames from 'classnames';

import styles from './StaggeredItem.module.scss';

export const StaggeredItem = ({ children, className }: StaggeredItemProps) => {
	return (
		<li className={classNames(styles['staggered-item'], className)}>
			{children}
		</li>
	);
};

type StaggeredItemProps = {
	children: ReactNode;
	className?: string;
};
