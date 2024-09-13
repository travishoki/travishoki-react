import React from 'react';
import { SOFTWARE_IMAGES, SoftwareKeys } from '~const/Software.const';

import './SoftwareIcon.scss';

const SoftwareIcon = ({ name }: SoftwareIconProps) => (
	<div className="tech-icon-holder">
		<img className="software-icon" src={SOFTWARE_IMAGES[name]} />
	</div>
);

type SoftwareIconProps = {
	name: keyof SoftwareKeys;
};

export default SoftwareIcon;
