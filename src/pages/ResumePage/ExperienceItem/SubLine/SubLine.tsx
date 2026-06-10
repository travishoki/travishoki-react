import React from 'react';

import './SubLine.scss';

type SubLineProps = {
	dateEnd: string;
	dateStart: string;
	position: string;
};

export const SubLine = ({ dateEnd, dateStart, position }: SubLineProps) => (
	<div className="sub-line">
		<h4>{position}</h4>
		<p className="date">
			{dateStart} - {dateEnd}
		</p>
	</div>
);
