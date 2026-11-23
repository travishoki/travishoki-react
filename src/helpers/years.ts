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

export const getExperienceYears = () => {
	const MONTH = 11;
	const YEAR = 2011;
	const d = new Date();
	const monthNum = d.getMonth() + 1;
	const yearNum = d.getFullYear();
	const fullYearsExperience = yearNum - YEAR;

	if (monthNum < MONTH) {
		return fullYearsExperience - 1;
	}

	return fullYearsExperience;
};
