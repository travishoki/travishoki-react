/* global describe, it */
import expect from 'expect';

import { orderTopThreeInPodium } from './Projects.utils';
import { ProjectType } from 'src/pages/ProjectsPage/ProjectsPage.data';

describe('orderTopThreeInPodium', () => {
	it('Should return top three in podium order', () => {
		const project1 = mockProjectType({ title: 'one' });
		const project2 = mockProjectType({ title: 'two' });
		const project3 = mockProjectType({ title: 'three' });
		const list = [project1, project2, project3];
		const result = orderTopThreeInPodium(list);
		const expectedResult = [project2, project1, project3];

		expect(result).toEqual(expectedResult);
	});

	it('Should return top three in podium order', () => {
		const project1 = mockProjectType({ title: 'one' });
		const project2 = mockProjectType({ title: 'two' });
		const list = [project1, project2];
		const result = orderTopThreeInPodium(list);
		const expectedResult = [project1, project2];

		expect(result).toEqual(expectedResult);
	});
});

const mockProjectType = (override: Partial<ProjectType>): ProjectType => ({
	company: '',
	contributions: [],
	desc: '',
	itemKey: '',
	learned: '',
	live: true,
	subtitle: '',
	techs: [],
	title: '',
	url: '',
	...override,
});
