/* global describe, it */
import expect from 'expect';

import { getLabelByKey } from './getLabelByKey';

describe('getLabelByKey', () => {
	it('returns the label for a known tech key', () => {
		expect(getLabelByKey('REACT_JS')).toBe('React JS');
	});

	it('returns the label for another known tech key', () => {
		expect(getLabelByKey('NODE_JS')).toBe('Node JS');
	});

	it('falls back to the raw key for an unknown key', () => {
		expect(getLabelByKey('UNKNOWN_TECH')).toBe('UNKNOWN_TECH');
	});
});
