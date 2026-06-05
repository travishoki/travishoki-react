export const getFirstParagraph = <T>(value: T | T[]): T =>
	Array.isArray(value) ? value[0] : value;

export const makeArray = <T>(value: T | T[]): T[] =>
	Array.isArray(value) ? value : [value];
