export const hasUniqueItemKeys = (data: { itemKey: string }[]): boolean => {
	const keys = data.map((item) => item.itemKey);
	const uniqueKeys = new Set(keys);

	return uniqueKeys.size === keys.length;
};

export const hasNoEmptyItemKeys = (data: { itemKey: string }[]): boolean =>
	data.every((item) => item.itemKey !== '');
