import React, { ReactNode } from 'react';

import classNames from 'classnames';

import styles from './StaggeredList.module.scss';

export const StaggeredList = ({ children, className }: StaggeredListProps) => {
	return (
		<ul className={classNames(styles.staggered, className)}>{children}</ul>
	);
};

type StaggeredListProps = {
	children: ReactNode;
	className?: string;
};
