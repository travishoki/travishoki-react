import expect from 'expect';

import { ROUTES } from '~const/Routes.const';

import { getSeoData } from './SingleProjectPage.helpers';
import { ProjectType } from '../ProjectsPage/ProjectsPage.types';

const mockProject = (overrides: Partial<ProjectType>): ProjectType => ({
	company: 'Company',
	companySlug: 'company',
	contributions: '',
	description: '',
	gallery: [],
	itemKey: 'company',
	learned: '',
	techs: [],
	...overrides,
});

describe('getSeoData', () => {
	it('uses the project company as the title', () => {
		const project = mockProject({ company: 'Food Cards' });
		expect(getSeoData(project).title).toBe('Food Cards');
	});

	it('builds the canonical from the project itemKey', () => {
		const project = mockProject({ itemKey: 'food-cards' });
		expect(getSeoData(project).canonical).toBe(`${ROUTES.PROJECT}/food-cards`);
	});

	it('uses a string description directly', () => {
		const project = mockProject({ description: 'A great project.' });
		expect(getSeoData(project).description).toBe('A great project.');
	});

	it('uses the first element when description is an array', () => {
		const project = mockProject({
			description: ['First sentence.', 'Second sentence.'],
		});
		expect(getSeoData(project).description).toBe('First sentence.');
	});
});
