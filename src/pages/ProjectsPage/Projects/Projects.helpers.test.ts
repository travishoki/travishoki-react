/* global describe, it */
import expect from 'expect';

import { getResultsCountClass } from './Projects.helpers';

describe('getResultsCountClass', () => {
	it('returns results-<n> when below the max column count', () => {
		expect(getResultsCountClass(1)).toBe('results1');
		expect(getResultsCountClass(2)).toBe('results2');
		expect(getResultsCountClass(3)).toBe('results3');
	});

	it('returns results-full at or above the max column count', () => {
		expect(getResultsCountClass(4)).toBe('resultsFull');
		expect(getResultsCountClass(10)).toBe('resultsFull');
	});
});
