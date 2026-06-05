import React from 'react';

import { Nav } from './Nav/Nav';
import { Title } from './Title/Title';

import './Header.scss';

export const Header = () => (
	<div id="header">
		<div className="boxed">
			<Title />
			<Nav />
		</div>
	</div>
);
