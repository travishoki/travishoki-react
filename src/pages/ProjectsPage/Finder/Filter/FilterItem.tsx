import React from 'react';

import classnames from 'classnames';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TECH, TechKey, TechFilterType } from '~const/Tech.const';

export const FilterItem = ({
	filter,
	item,
	onSelectFilter,
}: FilterItemProps) => {
	const { label } = TECH[item];

	return (
		<li
			className={classnames('filter-item', {
				active: filter === null || filter === item,
			})}
			onClick={() => onSelectFilter(item)}
		>
			<TechIcon name={item} />
			<p>{label}</p>
		</li>
	);
};

type FilterItemProps = {
	filter: TechFilterType;
	item: TechKey;
	onSelectFilter: (filter: TechFilterType) => void;
};
