import React from 'react';

import { TechListSwitcher } from '~components/TechListSwitcher/TechListSwitcher';

import { DISPLAYED_LIST } from '../HomePage.data';
import './TechTiles.scss';

export const TechTiles = () => (
	<section className="tech-tiles">
		<TechListSwitcher header="Tech & Frameworks" list={DISPLAYED_LIST} />
	</section>
);
