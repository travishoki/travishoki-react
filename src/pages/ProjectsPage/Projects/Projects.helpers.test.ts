/* global describe, it */
import expect from 'expect';

import { getResultsCountClass } from './Projects.helpers';

describe('getResultsCountClass', () => {
	it('returns results-<n> when below the max column count', () => {
		expect(getResultsCountClass(1)).toBe('results-1');
		expect(getResultsCountClass(2)).toBe('results-2');
		expect(getResultsCountClass(3)).toBe('results-3');
	});

	it('returns results-full at or above the max column count', () => {
		expect(getResultsCountClass(4)).toBe('results-full');
		expect(getResultsCountClass(10)).toBe('results-full');
	});
});
