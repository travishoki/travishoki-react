import React from 'react';

import { Link } from 'react-router-dom';

import { ListSwitcherItemData } from '../ListSwitcher';

type ListSwitcherItemProps = ListSwitcherItemData & {
	expanded: boolean;
	iconClass: string;
	itemClassName?: string;
};

export const ListSwitcherItem = ({
	expanded,
	iconClass,
	image,
	itemClassName,
	label,
	to,
}: ListSwitcherItemProps) => (
	<li className={itemClassName}>
		{to ? (
			<Link title={label} to={to}>
				<img alt={label} className={iconClass} src={image} />
				{expanded && <p>{label}</p>}
			</Link>
		) : (
			<div className="list-switcher-item">
				<img alt={label} className={iconClass} src={image} />
				{expanded && <p>{label}</p>}
			</div>
		)}
	</li>
);
