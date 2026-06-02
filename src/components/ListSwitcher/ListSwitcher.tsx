import React, { useState } from 'react';

import classnames from 'classnames';

import { ListSwitcherItem } from './ListSwitcherItem/ListSwitcherItem';
import './ListSwitcher.scss';

export type ListSwitcherItemData = {
	image: string;
	label: string;
	to?: string;
};

type ListSwitcherProps = {
	circle?: boolean;
	header?: string;
	initialExpanded?: boolean;
	items: ListSwitcherItemData[];
};

export const ListSwitcher = ({
	circle = false,
	header,
	initialExpanded = false,
	items,
}: ListSwitcherProps) => {
	const [expanded, setExpanded] = useState(initialExpanded);

	if (items.length === 0) return null;

	const iconClass = classnames('list-switcher-icon', { circle });

	return (
		<div className="list-switcher">
			{header && (
				<div className="list-switcher-header">
					<p>{header}</p>
				</div>
			)}
			<div className="list-switcher-content">
				<div
					className={
						expanded ? 'list-switcher-vertical' : 'list-switcher-horizontal'
					}
				>
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
				</div>
			</div>
			<button
				className="btn btn-primary list-switcher-button"
				onClick={() => setExpanded(!expanded)}
			>
				<i className={`fa fa-chevron-${expanded ? 'up' : 'down'}`} />
			</button>
		</div>
	);
};
