import expect from 'expect';

import { getYearsSince } from './years';

describe('getYearsSince', () => {
	it('Should return a number', () => {
		const result = getYearsSince('2000-01-01');

		expect(typeof result).toEqual('number');
	});

	it('Should return the correct age when the birthday has already passed this year', () => {
		jest.useFakeTimers().setSystemTime(new Date('2026-08-01'));

		expect(getYearsSince('1990-07-08')).toEqual(36);

		jest.useRealTimers();
	});

	it('Should return the correct age when the birthday has not happened yet this year', () => {
		jest.useFakeTimers().setSystemTime(new Date('2026-06-20'));

		expect(getYearsSince('1990-07-08')).toEqual(35);

		jest.useRealTimers();
	});
});
