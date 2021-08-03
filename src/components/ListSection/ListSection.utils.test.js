import expect from 'expect';

import { splitListInHalf } from './ListSection.utils';

describe('splitListInHalf', function() {
	it('Should return a list split in two', function() {
        const list = ['a', 'b', 'c', 'd', 'e'];
		const result = splitListInHalf(list);
        const expectedResult = [
            ['a', 'b', 'c'],
            ['d', 'e'],
        ];

		expect(result).toEqual(expectedResult);
	});
});