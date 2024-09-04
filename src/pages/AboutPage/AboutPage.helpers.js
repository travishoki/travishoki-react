export const getYearsSince = (year) => {
  const thisYear = new Date().getFullYear();

  return thisYear - year;
};
