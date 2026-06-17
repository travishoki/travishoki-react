import React from 'react';

import { FightForYourDreams } from './FightForYourDreams/FightForYourDreams';
import { HokiSkateboards } from './HokiSkateboards/HokiSkateboards';

export const PassionPage = () => (
	<div className="passion" id="container">
		<h1>Passion Projects</h1>
		<HokiSkateboards />
		<FightForYourDreams />
	</div>
);
