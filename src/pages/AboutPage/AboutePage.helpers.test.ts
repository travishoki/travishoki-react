/* global describe, it */
import expect from 'expect';
import { getYearsSince } from './AboutPage.helpers';

describe('getYearsSince', () => {
	it('Should return a date', () => {
		const year = 2000;
		const result = getYearsSince(year);
		const expectedResult = 'number';

		expect(typeof result).toEqual(expectedResult);
	});
});
