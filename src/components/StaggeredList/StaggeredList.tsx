import React, { ReactNode } from 'react';

import styles from './StaggeredList.module.scss';

export const StaggeredList = ({ children }: StaggeredListProps) => {
	return <ul className={styles.staggered}>{children}</ul>;
};

type StaggeredListProps = {
	children: ReactNode;
};
