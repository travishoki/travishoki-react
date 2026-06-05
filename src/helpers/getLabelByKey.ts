import { TECH, TechKey } from '~const/Tech.const';

export const getLabelByKey = (key: string): string =>
	TECH[key as TechKey]?.label ?? key;
