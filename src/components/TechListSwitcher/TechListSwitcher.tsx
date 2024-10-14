import React, { useState } from 'react';

import { TechKeys } from '~const/Tech.const';
import { TechListVertical } from '~components/TechListSwitcher/TechListVertical/TechListVertical';
import { TechListHorizontal } from '~components/TechListSwitcher/TechListHorizontal/TechListHorizontal';
import './TechListSwitcher.scss';

export const TechListSwitcher = ({
	intialExpanded = false,
	list,
}: TechListProps) => {
	const [expanded, setExpanded] = useState(intialExpanded);

	const onClick = () => setExpanded(!expanded);

	if (list.length === 0) return null;

	return (
		<div className="tech-list-switcher">
			<div className="tech-list-switcher-content">
				{expanded ? (
					<TechListVertical list={list} />
				) : (
					<TechListHorizontal list={list} />
				)}
			</div>

			<button
				className="btn btn-primary tech-list-switcher-button"
				onClick={onClick}
			>
				{expanded ? (
					<i className="fa fa-chevron-up" />
				) : (
					<i className="fa fa-chevron-down" />
				)}
			</button>
		</div>
	);
};

type TechListProps = {
	intialExpanded?: boolean;
	list: (keyof TechKeys)[];
};
