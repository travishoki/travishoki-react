export const getYearsSince = (d: string) => {
	const birth = new Date(d);
	const today = new Date();

	let age = today.getFullYear() - birth.getFullYear();

	const hasHadBirthdayThisYear =
		today.getMonth() > birth.getMonth() ||
		(today.getMonth() === birth.getMonth() &&
			today.getDate() >= birth.getDate());

	if (!hasHadBirthdayThisYear) age--;

	return age;
};
