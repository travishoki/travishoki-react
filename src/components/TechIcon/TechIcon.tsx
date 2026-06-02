import React from 'react';
import { TECH, TechKeys } from '~const/Tech.const';

import './TechIcon.scss';

export const TechIcon = ({ name }: TechIconProps) => (
	<div className="tech-icon-holder">
		<img className="tech-icon" src={TECH[name].image} />
	</div>
);

type TechIconProps = {
	name: keyof TechKeys;
};
