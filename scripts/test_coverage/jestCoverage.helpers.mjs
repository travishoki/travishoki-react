export const average = (array) => {
	if (array.length === 0) return 0;

	return array.reduce((a, b) => a + b) / array.length;
};

const round = (num) => {
	return Math.round(num);
};

export const formatPercent = (num) => {
	const rounded = round(num, 2);

	return `${rounded}%`;
};
