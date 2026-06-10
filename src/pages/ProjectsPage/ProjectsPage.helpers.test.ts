/* global describe, it */
import expect from 'expect';

import { JAVASCRIPT, REACT_JS } from '~const/Tech.const';
import { createProjectsPageUrl, filterProjects } from './ProjectsPage.helpers';
import { ProjectType } from './ProjectsPage.types';

const makeProject = (overrides: Partial<ProjectType>): ProjectType => ({
	company: 'Company',
	companySlug: 'company',
	contributions: '',
	description: '',
	itemKey: 'company',
	learned: '',
	techs: [],
	...overrides,
});

describe('filterProjects', () => {
	const reactProject = makeProject({ company: 'Reacty', techs: [REACT_JS] });
	const jsProject = makeProject({
		company: 'Scripty',
		description: 'uses vanilla',
		techs: [JAVASCRIPT],
	});
	const projects = [reactProject, jsProject];

	it('returns all projects when there is no filter or search', () => {
		expect(filterProjects(projects, null, '')).toEqual(projects);
	});

	it('filters by tech', () => {
		expect(filterProjects(projects, REACT_JS, '')).toEqual([reactProject]);
	});

	it('searches across fields, case-insensitively', () => {
		expect(filterProjects(projects, null, 'SCRIPTY')).toEqual([jsProject]);
		expect(filterProjects(projects, null, 'vanilla')).toEqual([jsProject]);
	});

	it('returns an empty list when nothing matches the search', () => {
		expect(filterProjects(projects, null, 'no-match')).toEqual([]);
	});
});

describe('createProjectsPageUrl', () => {
	it('returns the path alone when no filter or search', () => {
		expect(createProjectsPageUrl('/projects')).toBe('/projects');
	});

	it('appends the filter when only a filter is given', () => {
		expect(createProjectsPageUrl('/projects', REACT_JS)).toBe(
			`/projects/${REACT_JS}`,
		);
	});

	it('appends filter and search when a search is given', () => {
		expect(createProjectsPageUrl('/projects', REACT_JS, 'book')).toBe(
			`/projects/${REACT_JS}/book`,
		);
	});

	it('uses null in place of a missing filter when searching', () => {
		expect(createProjectsPageUrl('/projects', undefined, 'book')).toBe(
			'/projects/null/book',
		);
	});
});
