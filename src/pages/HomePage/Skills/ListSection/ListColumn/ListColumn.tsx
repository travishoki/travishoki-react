import React from 'react';

type ListColumnProps = {
	items: string[];
};

export const ListColumn = ({ items }: ListColumnProps) => (
	<ul>
		{items.map((item, index) => (
			<li key={index}>{item}</li>
		))}
	</ul>
);
