import React from 'react';

import {
	ListSwitcher,
	ListSwitcherItemData,
} from '~components/ListSwitcher/ListSwitcher';
import { SOFTWARE, SoftwareKey } from '~const/Software.const';

type SoftwareListProps = {
	header?: string;
	list: SoftwareKey[];
};

export const SoftwareListSwitcher = ({
	header = 'Software',
	list,
}: SoftwareListProps) => {
	const items: ListSwitcherItemData[] = list.map((software) => ({
		image: SOFTWARE[software].image,
		label: SOFTWARE[software].label,
	}));

	return <ListSwitcher header={header} items={items} />;
};
