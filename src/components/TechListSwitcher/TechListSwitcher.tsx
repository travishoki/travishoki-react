import React from 'react';

import {
	ListSwitcher,
	ListSwitcherItemData,
} from '~components/ListSwitcher/ListSwitcher';
import { TECH, TechKey } from '~const/Tech.const';

type TechListProps = {
	header?: string;
	initialExpanded?: boolean;
	itemClassName?: string;
	list: TechKey[];
};

export const TechListSwitcher = ({
	header = 'Tech Stack',
	initialExpanded = false,
	itemClassName,
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
			itemClassName={itemClassName}
			items={items}
		/>
	);
};
