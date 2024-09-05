import React from 'react';

import classnames from 'classnames';

import TechIcon from '~components/TechIcon/TechIcon';

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
	filter: string | null;
	item: string;
	onSelectFilter: (filter: string) => void;
};

export default FilterItem;
