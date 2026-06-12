/**
 * @jest-environment jsdom
 */
import React from 'react';

import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { TechCatalogueList } from './TechCatalogueList';

describe('TechCatalogueList', () => {
	it('should not render', async () => {
		const props = {
			expanded: true,
			iconClass: '',
			items: [],
		};

		const { container } = render(<TechCatalogueList {...props} />);

		expect(container).toBeEmptyDOMElement();
	});
});
