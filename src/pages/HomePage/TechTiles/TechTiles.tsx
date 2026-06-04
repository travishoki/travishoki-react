import React from 'react';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';

import { DISPLAYED_LIST } from '../HomePage.data';
import './TechTiles.scss';

export const TechTiles = () => (
	<section className="tech-tiles">
		<TechListCatalogue
			header="Proficient Tech"
			itemClassName="col-6 col-md-4"
			list={DISPLAYED_LIST}
		/>
	</section>
);
