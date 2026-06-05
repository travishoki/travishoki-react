import { TECH, TechKey } from '~const/Tech.const';

export const slugify = (value: string) =>
	value
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');

export const getItemKey = (companySlug: string, subtitle: string) =>
	subtitle ? `${companySlug}-${slugify(subtitle)}` : companySlug;

export const getLabelByKey = (key: string): string =>
	TECH[key as TechKey]?.label ?? key;
