import React from 'react';

import {
	ListSwitcher,
	ListSwitcherItemData,
} from '~components/ListSwitcher/ListSwitcher';
import { TECH_IMAGES, TechKeys, TechStrings } from '~const/Tech.const';

type TechListProps = {
	header?: string;
	initialExpanded?: boolean;
	list: (keyof TechKeys)[];
};

export const TechListSwitcher = ({
	header = 'Tech Stack',
	initialExpanded = false,
	list,
}: TechListProps) => {
	const items: ListSwitcherItemData[] = list.map((tech) => ({
		image: TECH_IMAGES[tech],
		label: TechStrings[tech],
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
