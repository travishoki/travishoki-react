import React from 'react';

import TechIcon from '~components/TechIcon/TechIcon';
import { TechFilterType } from '~const/Tech.const';

import './CurrentFilter.scss';

const CurrentFilter = ({
	filter,
	onClearAndCloseFilter,
}: CurrentFilterProps) => {
	if (!filter || filter === 'all' || filter === 'null') return null;

	return (
		<div className="current-filter tech-icon-item">
			<TechIcon name={filter} />
			<p>{filter}</p>
			<i
				className="fa fa-close pointer f-right"
				onClick={onClearAndCloseFilter}
			/>
		</div>
	);
};

type CurrentFilterProps = {
	filter: TechFilterType;
	onClearAndCloseFilter: () => void;
};

export default CurrentFilter;
