import React, { useState } from 'react';

import { TechKeys } from '~const/Tech.const';
import { TechList } from '~components/TechListSwitcher/TechList/TechList';
import { TechListHorizontal } from '~components/TechListSwitcher/TechListHorizontal/TechListHorizontal';

export const TechListSwitcher = ({
	intialExpanded = false,
	list,
}: TechListProps) => {
	const [expanded, setExpanded] = useState(intialExpanded);

	const onClick = () => setExpanded(!expanded);

	return (
		<>
			{expanded ? <TechList list={list} /> : <TechListHorizontal list={list} />}
			<button className="btn btn-primary" onClick={onClick}>
				{expanded ? 'Minimize' : 'Expand'}
			</button>
		</>
	);
};

type TechListProps = {
	intialExpanded?: boolean;
	list: (keyof TechKeys)[];
};
