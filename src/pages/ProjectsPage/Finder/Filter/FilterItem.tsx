import React from 'react';

import classnames from 'classnames';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TechKeys, TechFilterType, TechStrings } from '~const/Tech.const';

export const FilterItem = ({
	filter,
	item,
	onSelectFilter,
}: FilterItemProps) => (
	<li
		className={classnames('filter-item', {
			active: filter === null || filter === item,
		})}
		onClick={() => onSelectFilter(item)}
	>
		<TechIcon name={item} />
		<p>{TechStrings[item]}</p>
	</li>
);

type FilterItemProps = {
	filter: TechFilterType;
	item: keyof TechKeys;
	onSelectFilter: (filter: TechFilterType) => void;
};
