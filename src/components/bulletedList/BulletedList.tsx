import React from 'react';

import './BulletedList.scss';

export const BulletedList = ({ list }: BulletedListPropTypes) => (
	<ul className="bulleted mb-2">
		{list.map((item, index) => (
			<li key={index} className="bulleted-item">
				{item}
			</li>
		))}
	</ul>
);

type BulletedListPropTypes = {
	list: string[];
};
