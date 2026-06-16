import styles from './ProjectList.module.scss';

export const getExpandedStyle = (columns: number) => {
	/* eslint-disable no-magic-numbers */
	if (columns === 2) return styles.projectsGridTwo;
	if (columns === 3) return styles.projectsGridThree;
	/* eslint-enable no-magic-numbers */

	return styles.projectsGridTwo;
};
