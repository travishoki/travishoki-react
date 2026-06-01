import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import classnames from 'classnames';

import './ListSwitcher.scss';

export type ListSwitcherItem = {
	image: string;
	label: string;
	to?: string;
};

type ListSwitcherProps = {
	circle?: boolean;
	header?: string;
	initialExpanded?: boolean;
	items: ListSwitcherItem[];
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
				<ul
					className={
						expanded ? 'list-switcher-vertical' : 'list-switcher-horizontal'
					}
				>
					{items.map(({ image, label, to }, index) => (
						<li key={index}>
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
					))}
				</ul>
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
