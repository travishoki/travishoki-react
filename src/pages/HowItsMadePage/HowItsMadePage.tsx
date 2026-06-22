import React from 'react';

import { HowItsMadeLinks } from './HowItsMadeLinks/HowItsMadeLinks';
import { HowItsMadeList } from './HowItsMadeList/HowItsMadeList';

export const HowItsMadePage = () => {
	return (
		<div id="container">
			<h1>How This Site Was Made</h1>
			<HowItsMadeLinks />
			<HowItsMadeList />
		</div>
	);
};
