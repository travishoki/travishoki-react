/* global describe, it */
import expect from 'expect';

import { getItemKey, slugify } from './projects';

describe('slugify', () => {
	it('lowercases the value', () => {
		expect(slugify('Hello World')).toBe('hello-world');
	});

	it('replaces spaces with hyphens', () => {
		expect(slugify('hoki skateboards')).toBe('hoki-skateboards');
	});

	it('replaces special characters with hyphens', () => {
		expect(slugify('Travis & Lindsey!')).toBe('travis-lindsey');
	});

	it('trims leading and trailing hyphens', () => {
		expect(slugify('  hello  ')).toBe('hello');
	});

	it('collapses multiple special characters into a single hyphen', () => {
		expect(slugify('hello---world')).toBe('hello-world');
	});
});

describe('getItemKey', () => {
	it('returns the companySlug when subtitle is empty', () => {
		expect(getItemKey('hoki-skateboards', '')).toBe('hoki-skateboards');
	});

	it('combines companySlug and slugified subtitle when subtitle is provided', () => {
		expect(getItemKey('hoki-skateboards', 'Mobile App')).toBe(
			'hoki-skateboards-mobile-app',
		);
	});

	it('handles subtitle with special characters', () => {
		expect(getItemKey('acme', 'React & Node')).toBe('acme-react-node');
	});
});
