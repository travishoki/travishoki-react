/* global describe, it */
import expect from 'expect';

import { websiteGalleryImageSrc } from './websiteGallery';

// Under Jest every image import resolves to the same stub ('test-file-stub',
// see testing/fileMock.ts), so we can't assert which file came back. These tests
// lock the resolver's contract instead: known filenames resolve, unknown ones
// fall back to the missing-images image rather than returning undefined.
describe('websiteGalleryImageSrc', () => {
	it('resolves a known gallery filename to an image', () => {
		expect(websiteGalleryImageSrc('food-cards-1.jpg')).toBe('test-file-stub');
	});

	it('falls back to the missing-images image for an unknown filename', () => {
		expect(websiteGalleryImageSrc('not-a-real-file.jpg')).toBe(
			'test-file-stub',
		);
	});

	it('never returns undefined', () => {
		expect(websiteGalleryImageSrc('not-a-real-file.jpg')).toBeDefined();
	});
});
