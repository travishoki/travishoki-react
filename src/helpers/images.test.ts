/* global describe, it */
import expect from 'expect';

import { getImgAltText } from './images';

describe('getImgAltText', () => {
	it('returns the company', () => {
		const company = 'Hoki Skateboards';
		expect(getImgAltText(company)).toEqual('Hoki Skateboards');
	});

	it('returns the company + subtitle', () => {
		const company = 'Hoki Skateboards';
		const subtitle = 'Feature';
		expect(getImgAltText(company, subtitle)).toEqual(
			'Hoki Skateboards Feature',
		);
	});
});
