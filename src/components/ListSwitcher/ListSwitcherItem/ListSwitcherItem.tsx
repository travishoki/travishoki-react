import React from 'react';

import { Link } from 'react-router-dom';

import { ListSwitcherItemData } from '../ListSwitcher';

type ListSwitcherItemProps = ListSwitcherItemData & {
	expanded: boolean;
	iconClass: string;
};

export const ListSwitcherItem = ({
	expanded,
	iconClass,
	image,
	label,
	to,
}: ListSwitcherItemProps) => (
	<li>
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
