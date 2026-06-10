/* global describe, it, jest, afterEach */
import expect from 'expect';

import { getExperienceYears } from './HomePage.helpers';

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
