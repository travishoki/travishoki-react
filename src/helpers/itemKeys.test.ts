import expect from 'expect';

import { hasNoEmptyItemKeys, hasUniqueItemKeys } from './itemKeys';

describe('hasUniqueItemKeys', () => {
	it('returns true when all keys are unique', () => {
		const data = [{ itemKey: 'a' }, { itemKey: 'b' }, { itemKey: 'c' }];

		expect(hasUniqueItemKeys(data)).toBe(true);
	});

	it('returns false when keys are duplicated', () => {
		const data = [{ itemKey: 'a' }, { itemKey: 'a' }];

		expect(hasUniqueItemKeys(data)).toBe(false);
	});
});

describe('hasNoEmptyItemKeys', () => {
	it('returns true when no keys are empty', () => {
		const data = [{ itemKey: 'a' }, { itemKey: 'b' }];

		expect(hasNoEmptyItemKeys(data)).toBe(true);
	});

	it('returns false when a key is empty', () => {
		const data = [{ itemKey: 'a' }, { itemKey: '' }];

		expect(hasNoEmptyItemKeys(data)).toBe(false);
	});
});
