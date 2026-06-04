import React from 'react';

import {
	ListSwitcher,
	ListSwitcherItemData,
} from '~components/ListSwitcher/ListSwitcher';
import { SOFTWARE, SoftwareKey } from '~const/Software.const';

type SoftwareListProps = {
	header?: string;
	itemClassName?: string;
	list: SoftwareKey[];
};

export const SoftwareListSwitcher = ({
	header = 'Software',
	itemClassName,
	list,
}: SoftwareListProps) => {
	const items: ListSwitcherItemData[] = list.map((software) => ({
		image: SOFTWARE[software].image,
		label: SOFTWARE[software].label,
		type: SOFTWARE[software].type,
	}));

	return (
		<ListSwitcher header={header} itemClassName={itemClassName} items={items} />
	);
};
