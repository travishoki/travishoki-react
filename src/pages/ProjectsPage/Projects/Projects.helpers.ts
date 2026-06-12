import styles from './Projects.module.scss';

export const getResultsCountClass = (num: number) => {
	const MAX_COLUMN_COUNT = 4;

	if (num < MAX_COLUMN_COUNT) {
		return styles[`results${num}`];
	}

	return styles.resultsFull;
};
