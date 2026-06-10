/* global describe, it, beforeAll */
import expect from 'expect';

import { websiteGalleryImageSrc, websiteImageSrc } from './websiteImages';

describe('websiteImages', () => {
	beforeAll(() => {
		process.env.PUBLIC_URL = '';
	});

	describe('websiteImageSrc', () => {
		it('builds a thumbnail path', () => {
			expect(websiteImageSrc('all-american-sod', 'thumbnail')).toBe(
				'/images/websites/thumbnail/all-american-sod.jpg',
			);
		});

		it('builds a gallery path', () => {
			expect(websiteImageSrc('all-american-sod', 'gallery')).toBe(
				'/images/websites/gallery/all-american-sod.jpg',
			);
		});
	});

	describe('websiteGalleryImageSrc', () => {
		it('builds a gallery path from a filename', () => {
			expect(websiteGalleryImageSrc('blue-monday-salon-1.jpg')).toBe(
				'/images/websites/gallery/blue-monday-salon-1.jpg',
			);
		});
	});
});
