/* global describe, it */
import expect from 'expect';

import { ListSwitcherItemData } from './ListSwitcher';
import { groupTechByType } from './ListSwitcher.utils';

describe('groupTechByType', () => {
	it('Should group items by their type', () => {
		const items: ListSwitcherItemData[] = [
			{ image: 'react.jpg', label: 'React', type: 'frontend' },
			{ image: 'jquery.jpg', label: 'jQuery', type: 'legacy' },
			{ image: 'node.jpg', label: 'Node JS', type: 'backend' },
			{ image: 'ts.jpg', label: 'Typescript', type: 'frontend' },
			{ image: 'claude.jpg', label: 'Claude Code', type: 'tool' },
			{ image: 'php.jpg', label: 'PHP', type: 'backend' },
		];

		const result = groupTechByType(items);

		expect(result).toEqual({
			backend: [
				{ image: 'node.jpg', label: 'Node JS', type: 'backend' },
				{ image: 'php.jpg', label: 'PHP', type: 'backend' },
			],
			frontend: [
				{ image: 'react.jpg', label: 'React', type: 'frontend' },
				{ image: 'ts.jpg', label: 'Typescript', type: 'frontend' },
			],
			legacy: [{ image: 'jquery.jpg', label: 'jQuery', type: 'legacy' }],
			tool: [{ image: 'claude.jpg', label: 'Claude Code', type: 'tool' }],
		});
	});

	it('Should return empty arrays for every type when there are no items', () => {
		const result = groupTechByType([]);

		expect(result).toEqual({
			backend: [],
			frontend: [],
			legacy: [],
			tool: [],
		});
	});

	it('Should default items without a type to frontend', () => {
		const items: ListSwitcherItemData[] = [
			{ image: 'css.jpg', label: 'CSS' },
			{ image: 'html.jpg', label: 'HTML' },
		];

		const result = groupTechByType(items);

		expect(result.frontend).toEqual(items);
		expect(result.backend).toEqual([]);
		expect(result.tool).toEqual([]);
		expect(result.legacy).toEqual([]);
	});
});
