import React from 'react';

import classnames from 'classnames';

import { ListSwitcherItem } from '../ListSwitcherItem/ListSwitcherItem';
import { ListSwitcherItemData } from '../ListSwitcher';

type ListSwitcherListProps = {
	expanded: boolean;
	iconClass: string;
	itemClassName?: string;
	items: ListSwitcherItemData[];
};

export const ListSwitcherList = ({
	expanded,
	iconClass,
	itemClassName,
	items,
}: ListSwitcherListProps) => {
	if (items.length === 0) return null;

	return (
		<ul className={classnames({ row: itemClassName })}>
			{items.map((item, index) => (
				<ListSwitcherItem
					key={index}
					expanded={expanded}
					iconClass={iconClass}
					itemClassName={itemClassName}
					{...item}
				/>
			))}
		</ul>
	);
};
