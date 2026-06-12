/* global describe, it */
import expect from 'expect';

import { getResultsCountClass } from './Projects.helpers';

import styles from './Projects.module.scss';

describe('getResultsCountClass', () => {
	it('returns results<n> when below the max column count', () => {
		expect(getResultsCountClass(1)).toBe(styles.results1);
		expect(getResultsCountClass(2)).toBe(styles.results2);
		expect(getResultsCountClass(3)).toBe(styles.results3);
	});

	it('returns results-full at or above the max column count', () => {
		expect(getResultsCountClass(4)).toBe(styles.resultsFull);
		expect(getResultsCountClass(10)).toBe(styles.resultsFull);
	});
});
