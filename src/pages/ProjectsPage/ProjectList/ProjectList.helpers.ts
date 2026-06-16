import { COLUMNS_THREE, COLUMNS_TWO, MAX_COLUMNS } from './ProjectList.const';

import styles from './ProjectList.module.scss';

export const getExpandedStyle = (columns: number) => {
	if (columns === COLUMNS_TWO) return styles.projectsGridTwo;
	if (columns === COLUMNS_THREE) return styles.projectsGridThree;

	return styles.projectsGridTwo;
};

export const clamp = (num: number) => {
	if (num > MAX_COLUMNS) return MAX_COLUMNS;

	return num;
};
