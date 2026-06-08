import React from 'react';

import './ListColumn.scss';

type ListColumnProps = {
	items: string[];
};

export const ListColumn = ({ items }: ListColumnProps) => (
	<ul className="list-column">
		{items.map((item, index) => (
			<li key={index}>{item}</li>
		))}
	</ul>
);
