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

describe('getLargerNum', () => {
	test('getLargerNum - width', () => {
		const height = 200;
		const width = 100;
		const result = helpers.getSmallerNum(width, height);
		const expectedResult = width;

		expect(result).toEqual(expectedResult);
	});

	test('getSmallerNum - height', () => {
		const height = 100;
		const width = 200;
		const result = helpers.getSmallerNum(width, height);
		const expectedResult = height;

		expect(result).toEqual(expectedResult);
	});
});

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
