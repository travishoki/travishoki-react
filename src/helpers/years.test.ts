import expect from 'expect';

import { getExperienceYears, getYearsSince } from './years';

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

describe('getExperienceYears', () => {
	afterEach(() => {
		jest.useRealTimers();
	});

	const setToday = (date: string) => {
		jest.useFakeTimers();
		jest.setSystemTime(new Date(date));
	};

	it('counts full years from 2011 in November (the cutoff month)', () => {
		setToday('2024-11-15');
		expect(getExperienceYears()).toBe(13);
	});

	it('subtracts a year before November', () => {
		setToday('2024-10-15');
		expect(getExperienceYears()).toBe(12);
	});

	it('counts the full year in December', () => {
		setToday('2024-12-15');
		expect(getExperienceYears()).toBe(13);
	});
});
