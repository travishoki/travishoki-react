import expect from 'expect';

import { hasNoEmptyItemKeys, hasUniqueItemKeys } from '~helpers/itemKeys';

import { ABOUT_PAGE_DATA } from './AboutPage.data';

describe('ABOUT_PAGE_DATA', () => {
	it('has unique itemKeys', () => {
		expect(hasUniqueItemKeys(ABOUT_PAGE_DATA)).toBe(true);
	});

	it('has no empty itemKeys', () => {
		expect(hasNoEmptyItemKeys(ABOUT_PAGE_DATA)).toBe(true);
	});
});
