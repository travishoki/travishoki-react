import React from 'react';

import { ImgPopIn } from '~animations/ImgPopIn';
import ImgLogo from '~images/passion/fight-for-your-dreams/fight-for-your-dreams-title.png';

export const Logo = () => (
	<ImgPopIn
		alt="Fight For Your Dreams Logo"
		className="center"
		height="132px"
		src={ImgLogo}
		width="300px"
	/>
);
