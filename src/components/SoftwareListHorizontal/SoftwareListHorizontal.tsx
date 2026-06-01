import React from 'react';

import {
	ListSwitcher,
	ListSwitcherItem,
} from '~components/ListSwitcher/ListSwitcher';
import {
	SOFTWARE_IMAGES,
	SOFTWARE_STRINGS,
	SoftwareKeys,
} from '~const/Software.const';

type SoftwareListProps = {
	header?: string;
	list: (keyof SoftwareKeys)[];
};

export const SoftwareListHorizontal = ({
	header = 'Software',
	list,
}: SoftwareListProps) => {
	const items: ListSwitcherItem[] = list.map((software) => ({
		image: SOFTWARE_IMAGES[software],
		label: SOFTWARE_STRINGS[software],
	}));

	return <ListSwitcher header={header} items={items} />;
};
