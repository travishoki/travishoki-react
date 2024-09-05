export const getYearsSince = (year: number) => {
	const thisYear = new Date().getFullYear();

	return thisYear - year;
};
