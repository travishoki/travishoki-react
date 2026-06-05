/* global describe, it */
import expect from 'expect';

import { getFirstParagraph, makeArray } from './arrays';

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

describe('makeArray', () => {
	it('returns the array unchanged when given an array', () => {
		expect(makeArray(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
	});

	it('wraps a non-array value in an array', () => {
		expect(makeArray('hello')).toEqual(['hello']);
	});

	it('works with numbers', () => {
		expect(makeArray([1, 2, 3])).toEqual([1, 2, 3]);
		expect(makeArray(42)).toEqual([42]);
	});

	it('returns an empty array unchanged', () => {
		expect(makeArray([])).toEqual([]);
	});
});
