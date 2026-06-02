/* global describe, it */
import expect from 'expect';

import { ListSwitcherItemData } from './ListSwitcher';
import { splitByLegacy } from './ListSwitcher.utils';

describe('splitByLegacy', () => {
	it('Should split items into current and legacy tech', () => {
		const items: ListSwitcherItemData[] = [
			{ image: 'react.jpg', label: 'React' },
			{ image: 'jquery.jpg', label: 'jQuery', legacy: true },
			{ image: 'ts.jpg', label: 'Typescript' },
			{ image: 'as.jpg', label: 'Action Script', legacy: true },
		];

		const result = splitByLegacy(items);

		expect(result).toEqual({
			currentTech: [
				{ image: 'react.jpg', label: 'React' },
				{ image: 'ts.jpg', label: 'Typescript' },
			],
			legacyTech: [
				{ image: 'jquery.jpg', label: 'jQuery', legacy: true },
				{ image: 'as.jpg', label: 'Action Script', legacy: true },
			],
		});
	});

	it('Should return empty arrays when there are no items', () => {
		const result = splitByLegacy([]);

		expect(result).toEqual({ currentTech: [], legacyTech: [] });
	});

	it('Should put all items in currentTech when none are legacy', () => {
		const items: ListSwitcherItemData[] = [
			{ image: 'react.jpg', label: 'React' },
			{ image: 'ts.jpg', label: 'Typescript' },
		];

		const result = splitByLegacy(items);

		expect(result).toEqual({ currentTech: items, legacyTech: [] });
	});
});
