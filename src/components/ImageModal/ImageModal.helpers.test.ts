import * as helpers from './ImageModal.helpers';

describe('getWidthFromHeight', () => {
	test('getWidthFromHeight', () => {
		const height = 100;
		const origWidth = 400;
		const origHeight = 200;
		const result = helpers.getWidthFromHeight(height, origWidth, origHeight);
		const expectedResult = 200;

		expect(result).toEqual(expectedResult);
	});
});

describe('getHeightFromWidth', () => {
	test('getHeightFromWidth', () => {
		const width = 100;
		const origWidth = 400;
		const origHeight = 200;
		const result = helpers.getHeightFromWidth(width, origWidth, origHeight);
		const expectedResult = 50;

		expect(result).toEqual(expectedResult);
	});
});
