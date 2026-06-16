// eslint-disable-next-line no-magic-numbers
export const bisect = (num: number) => num / 2;

export const cap = (num: number, max: number) => {
	if (num > max) return max;

	return num;
};
