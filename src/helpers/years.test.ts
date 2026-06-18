import expect from 'expect';

describe('getYearsSince', () => {
	it('Should return a date', () => {
		const year = '2000-01-01';
		const result = getYearsSince(year);
		const expectedResult = 'number';

		expect(typeof result).toEqual(expectedResult);
	});
});
