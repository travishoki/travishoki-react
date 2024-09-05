import React from 'react';

import classnames from 'classnames';

import TechIcon from '~components/TechIcon/TechIcon';
import { TechKeys, TechFilterType } from '~const/Tech.const';

const FilterItem = ({ filter, item, onSelectFilter }: FilterItemProps) => (
	<li
		className={classnames('filter-item tech-icon-item', {
			active: filter === null || filter === item,
		})}
		onClick={() => onSelectFilter(item)}
	>
		<TechIcon name={item} />
		<p>{item}</p>
	</li>
);

type FilterItemProps = {
	filter: TechFilterType;
	item: keyof TechKeys;
	onSelectFilter: (filter: TechFilterType) => void;
};

export default FilterItem;
