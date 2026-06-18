import expect from 'expect';

import { websiteThumbnailSrc } from './websiteThumbnails';

// Under Jest every image import resolves to the same stub ('test-file-stub',
// see testing/fileMock.ts), so we can't assert which file came back. These tests
// lock the resolver's contract instead: known keys resolve, unknown keys fall
// back to the missing-images thumbnail rather than returning undefined.
describe('websiteThumbnailSrc', () => {
	it('resolves a known project itemKey to a thumbnail', () => {
		expect(websiteThumbnailSrc('spiff-documents')).toBe('test-file-stub');
	});

	it('falls back to the missing-images thumbnail for an unknown itemKey', () => {
		expect(websiteThumbnailSrc('not-a-real-project')).toBe('test-file-stub');
	});

	it('never returns undefined', () => {
		expect(websiteThumbnailSrc('not-a-real-project')).toBeDefined();
	});
});
