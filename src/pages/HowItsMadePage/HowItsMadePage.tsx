import React from 'react';

import { HowItsMadeLinkList } from './HowItsMadeLinkList/HowItsMadeLinkList';
import { HowItsMadeList } from './HowItsMadeList/HowItsMadeList';

export const HowItsMadePage = () => {
	return (
		<div id="container">
			<h1>How This Site Was Made</h1>
			<HowItsMadeLinkList />
			<HowItsMadeList />
		</div>
	);
};
