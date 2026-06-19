import expect from 'expect';

import { ABOUT_PAGE_DATA } from './AboutPage.data';

describe('ABOUT_PAGE_DATA', () => {
	it('has unique itemKeys', () => {
		const keys = ABOUT_PAGE_DATA.map((item) => item.itemKey);
		const uniqueKeys = new Set(keys);

		expect(uniqueKeys.size).toBe(keys.length);
	});

	it('has no empty itemKeys', () => {
		const emptyKeys = ABOUT_PAGE_DATA.filter((item) => item.itemKey === '');

		expect(emptyKeys.length).toBe(0);
	});
});
