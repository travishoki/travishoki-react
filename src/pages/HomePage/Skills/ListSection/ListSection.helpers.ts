export const splitListInHalf = (originalList: string[]) => {
	const BISECT = 2;
	const list = [...originalList];
	const MID_NUM = Math.ceil(list.length / BISECT);
	const LIST_A = list.slice(0, MID_NUM);
	const LIST_B = list.splice(MID_NUM);

	return [LIST_A, LIST_B];
};
