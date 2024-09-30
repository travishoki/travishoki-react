export const getYearsSince = (d: string) => {
	const year = new Date(d).getFullYear();
	const thisYear = new Date().getFullYear();

	return thisYear - year;
};
