import expect from 'expect';

import { hasNoEmptyItemKeys, hasUniqueItemKeys } from '~helpers/itemKeys';

import { PROJECTS_DATA } from './ProjectsPage.data';

describe('PROJECTS_DATA', () => {
	it('has unique itemKeys', () => {
		expect(hasUniqueItemKeys(PROJECTS_DATA)).toBe(true);
	});

	it('has no empty itemKeys', () => {
		expect(hasNoEmptyItemKeys(PROJECTS_DATA)).toBe(true);
	});
});
