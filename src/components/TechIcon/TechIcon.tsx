import React from 'react';

const TechIcon = ({ name }: TechIconProps) => (
	<div className="tech-icon-holder">
		<div className={`tech-icon tech-${name}`} />
	</div>
);

type TechIconProps = {
	name: string;
};

export default TechIcon;
