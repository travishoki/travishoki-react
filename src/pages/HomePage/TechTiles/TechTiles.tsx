import React from 'react';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

import { DISPLAYED_LIST } from './TechTiles.data';

export const TechTiles = () => (
	<section className="gray-four">
		<TechListCatalogue list={DISPLAYED_LIST} title="Tech I have worked with" />
	</section>
);
