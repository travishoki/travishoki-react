import React from 'react';

import Nav from './Nav';
import Title from './Title';

const Header = () => (
	<div id="header">
		<div className="boxed">
			<Title />
			<Nav />
		</div>
	</div>
);

export default Header;
