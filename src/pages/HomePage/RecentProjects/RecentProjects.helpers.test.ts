/* global describe, it */
import expect from 'expect';
import { ProjectType } from 'src/pages/ProjectsPage/ProjectsPage.types';

import { orderTopThreeInPodium } from './RecentProjects.helpers';

describe('orderTopThreeInPodium', () => {
	it('Should return top three in podium order', () => {
		const project1 = mockProjectType({ company: 'one' });
		const project2 = mockProjectType({ company: 'two' });
		const project3 = mockProjectType({ company: 'three' });
		const list = [project1, project2, project3];
		const result = orderTopThreeInPodium(list);
		const expectedResult = [project2, project1, project3];

		expect(result).toEqual(expectedResult);
	});

	it('Should return top three in podium order', () => {
		const project1 = mockProjectType({ company: 'one' });
		const project2 = mockProjectType({ company: 'two' });
		const list = [project1, project2];
		const result = orderTopThreeInPodium(list);
		const expectedResult = [project1, project2];

		expect(result).toEqual(expectedResult);
	});
});

const mockProjectType = (override: Partial<ProjectType>): ProjectType => ({
	company: '',
	companySlug: '',
	contributions: [],
	description: '',
	itemKey: '',
	learned: '',
	live: true,
	subtitle: '',
	techs: [],
	url: '',
	...override,
});
