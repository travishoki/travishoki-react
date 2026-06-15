import React from 'react';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

import { DISPLAYED_LIST } from './TechTiles.data';

export const TechTiles = () => (
	<section>
		<TechListCatalogue
			header="Tech I have worked with:"
			itemClassName="col-6 col-md-4"
			list={DISPLAYED_LIST}
		/>
	</section>
);
