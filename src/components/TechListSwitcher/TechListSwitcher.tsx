import React from 'react';

import {
	ListSwitcher,
	ListSwitcherItem,
} from '~components/ListSwitcher/ListSwitcher';
import { TECH_IMAGES, TechKeys, TechStrings } from '~const/Tech.const';

type TechListProps = {
	header?: string;
	intialExpanded?: boolean;
	list: (keyof TechKeys)[];
};

export const TechListSwitcher = ({
	header = 'Tech Stack',
	intialExpanded = false,
	list,
}: TechListProps) => {
	const items: ListSwitcherItem[] = list.map((tech) => ({
		image: TECH_IMAGES[tech],
		label: TechStrings[tech],
		to: `/projects/${tech}`,
	}));

	return (
		<ListSwitcher
			circle
			header={header}
			initialExpanded={intialExpanded}
			items={items}
		/>
	);
};
