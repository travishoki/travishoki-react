export const getResultsCountClass = (num: number) => {
	const MAX_COLUMN_COUNT = 4;

	if (num < MAX_COLUMN_COUNT) {
		return `results-${num}`;
	}

	return 'results-full';
};
