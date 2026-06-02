import React from 'react';

import { TechListSwitcher } from '~components/TechListSwitcher/TechListSwitcher';

import { DISPLAYED_LIST } from '../HomePage.data';
import './TechTiles.scss';

export const TechTiles = () => (
	<section className="white tech-tiles">
		<TechListSwitcher
			header="Tech I have Experience with"
			list={DISPLAYED_LIST}
		/>
	</section>
);
