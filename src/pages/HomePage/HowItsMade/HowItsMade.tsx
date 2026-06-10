import React from 'react';

import { HowItsMadeLinks } from './HowItsMadeLinks/HowItsMadeLinks';
import { HowItsMadeList } from './HowItsMadeList/HowItsMadeList';
import './HowItsMade.scss';

export const HowItsMade = () => {
	return (
		<section className="how-its-made">
			<h2>How This Site Was Made</h2>

			<HowItsMadeLinks />
			<HowItsMadeList />
		</section>
	);
};
