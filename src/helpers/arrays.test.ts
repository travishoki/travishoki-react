/* global describe, it */
import expect from 'expect';

import { getFirstParagraph } from './arrays';

describe('getFirstParagraph', () => {
	it('returns the first item of an array', () => {
		expect(getFirstParagraph(['a', 'b', 'c'])).toBe('a');
	});

	it('returns the value itself when not an array', () => {
		expect(getFirstParagraph('hello')).toBe('hello');
	});

	it('works with numbers', () => {
		expect(getFirstParagraph([1, 2, 3])).toBe(1);
		expect(getFirstParagraph(42)).toBe(42);
	});

	it('returns undefined for an empty array', () => {
		expect(getFirstParagraph([])).toBeUndefined();
	});
});
