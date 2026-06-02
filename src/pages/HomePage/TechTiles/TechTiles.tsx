import React from 'react';

import { TechListSwitcher } from '~components/TechListSwitcher/TechListSwitcher';

import { DISPLAYED_LIST } from '../HomePage.data';
import './TechTiles.scss';

export const TechTiles = () => (
	<section className="tech-tiles">
		<TechListSwitcher
			header="Tech & Frameworks"
			itemClassName="col-6 col-md-4"
			list={DISPLAYED_LIST}
		/>
	</section>
);
