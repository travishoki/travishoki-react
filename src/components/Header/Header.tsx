import React from 'react';

import { Nav } from './Nav';
import { Title } from './Title';

import './Header.scss';

export const Header = () => (
	<div id="header">
		<div className="boxed">
			<Title />
			<Nav />
		</div>
	</div>
);
