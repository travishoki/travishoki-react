import { bisect } from '~helpers/numbers';

export const splitListInHalf = (originalList: string[]) => {
	const list = [...originalList];
	const MID_NUM = Math.ceil(bisect(list.length));
	const LIST_A = list.slice(0, MID_NUM);
	const LIST_B = list.splice(MID_NUM);

	return [LIST_A, LIST_B];
};
