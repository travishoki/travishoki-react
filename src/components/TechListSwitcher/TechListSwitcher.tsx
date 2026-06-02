import React from 'react';

import {
	ListSwitcher,
	ListSwitcherItemData,
} from '~components/ListSwitcher/ListSwitcher';
import { TECH, TechKey } from '~const/Tech.const';

type TechListProps = {
	header?: string;
	initialExpanded?: boolean;
	list: TechKey[];
};

export const TechListSwitcher = ({
	header = 'Tech Stack',
	initialExpanded = false,
	list,
}: TechListProps) => {
	const items: ListSwitcherItemData[] = list.map((tech) => ({
		...TECH[tech],
		to: `/projects/${tech}`,
	}));

	return (
		<ListSwitcher
			circle
			header={header}
			initialExpanded={initialExpanded}
			items={items}
		/>
	);
};
