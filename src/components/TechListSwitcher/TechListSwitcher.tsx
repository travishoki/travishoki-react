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

	return (
		<div className="tech-list-switcher">
			{expanded ? (
				<TechListVertical list={list} />
			) : (
				<TechListHorizontal list={list} />
			)}
			<button className="btn btn-primary" onClick={onClick}>
				{expanded ? 'Minimize' : 'Expand'}
			</button>
		</div>
	);
};

type TechListProps = {
	intialExpanded?: boolean;
	list: (keyof TechKeys)[];
};
