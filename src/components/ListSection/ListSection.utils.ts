export const splitListInHalf = (list: string[]) => {
	const MID_NUM = Math.ceil(list.length / 2);
	const LIST_A = list.slice(0, MID_NUM);
	const LIST_B = list.splice(MID_NUM);

	return [LIST_A, LIST_B];
};
