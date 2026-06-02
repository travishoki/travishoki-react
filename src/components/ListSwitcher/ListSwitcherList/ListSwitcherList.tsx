import React from 'react';

import { ListSwitcherItem } from '../ListSwitcherItem/ListSwitcherItem';
import { ListSwitcherItemData } from '../ListSwitcher';

type ListSwitcherListProps = {
	expanded: boolean;
	iconClass: string;
	items: ListSwitcherItemData[];
};

export const ListSwitcherList = ({
	expanded,
	iconClass,
	items,
}: ListSwitcherListProps) => {
	if (items.length === 0) return null;

	return (
		<ul>
			{items.map((item, index) => (
				<ListSwitcherItem
					key={index}
					expanded={expanded}
					iconClass={iconClass}
					{...item}
				/>
			))}
		</ul>
	);
};
