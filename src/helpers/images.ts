export const getImgAltText = (company: string, subtitle?: string) =>
	subtitle ? `${company} ${subtitle}` : company;
