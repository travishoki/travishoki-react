/* global describe, it */
import expect from 'expect';

import { EMPTY_GROUP_BY_TYPE, groupTechByType } from './TechCatalogue.helpers';
import { TechCatalogueItemData } from './TechCatalogue.types';

describe('groupTechByType', () => {
	it('Should group items by their type', () => {
		const items: TechCatalogueItemData[] = [
			{ image: 'react.jpg', label: 'React', type: 'frontend' },
			{ image: 'jquery.jpg', label: 'jQuery', type: 'legacy' },
			{ image: 'node.jpg', label: 'Node.js', type: 'backend' },
			{ image: 'ts.jpg', label: 'Typescript', type: 'frontend' },
			{ image: 'claude.jpg', label: 'Claude Code', type: 'tool' },
			{ image: 'php.jpg', label: 'PHP', type: 'backend' },
		];

		const result = groupTechByType(items);

		expect(result).toEqual({
			backend: [
				{ image: 'node.jpg', label: 'Node.js', type: 'backend' },
				{ image: 'php.jpg', label: 'PHP', type: 'backend' },
			],
			cms: [],
			design: [],
			frontend: [
				{ image: 'react.jpg', label: 'React', type: 'frontend' },
				{ image: 'ts.jpg', label: 'Typescript', type: 'frontend' },
			],
			illustration: [],
			integrations: [],
			legacy: [{ image: 'jquery.jpg', label: 'jQuery', type: 'legacy' }],
			tool: [{ image: 'claude.jpg', label: 'Claude Code', type: 'tool' }],
			video: [],
		});
	});

	it('Should return empty arrays for every type when there are no items', () => {
		const result = groupTechByType([]);

		expect(result).toEqual(EMPTY_GROUP_BY_TYPE);
	});

	it('Should default items without a type to frontend', () => {
		const items: TechCatalogueItemData[] = [
			{
				image: 'ts.jpg',
				label: 'Typescript',
				type: 'frontend',
			},
			{
				image: 'react.jpg',
				label: 'React',
				type: 'frontend',
			},
			{ image: 'css.jpg', label: 'CSS' },
			{ image: 'html.jpg', label: 'HTML' },
		];

		const result = groupTechByType(items);

		expect(result.frontend).toEqual([
			{ image: 'ts.jpg', label: 'Typescript', type: 'frontend' },
			{ image: 'react.jpg', label: 'React', type: 'frontend' },
			{ image: 'css.jpg', label: 'CSS' },
			{ image: 'html.jpg', label: 'HTML' },
		]);
		expect(result.backend).toEqual([]);
		expect(result.cms).toEqual([]);
		expect(result.design).toEqual([]);
		expect(result.illustration).toEqual([]);
		expect(result.integrations).toEqual([]);
		expect(result.legacy).toEqual([]);
		expect(result.tool).toEqual([]);
		expect(result.video).toEqual([]);
	});
});
