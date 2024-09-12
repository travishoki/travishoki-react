import React from 'react';
import { TECH_IMAGES, TechKeys } from '~const/Tech.const';

import './TechIcon.scss';

const TechIcon = ({ name }: TechIconProps) => (
	<div className="tech-icon-holder">
		<img className="tech-icon" src={TECH_IMAGES[name]} />
	</div>
);

type TechIconProps = {
	name: keyof TechKeys;
};

export default TechIcon;
