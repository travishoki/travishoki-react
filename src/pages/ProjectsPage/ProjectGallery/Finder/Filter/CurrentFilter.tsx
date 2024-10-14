import React from 'react';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TechFilterType, TechStrings } from '~const/Tech.const';

import './CurrentFilter.scss';

export const CurrentFilter = ({
	filter,
	onClearAndCloseFilter,
}: CurrentFilterProps) => {
	if (!filter || filter === 'all' || filter === 'null') return null;

	return (
		<div className="current-filter">
			<div className="tech-container">
				<TechIcon name={filter} />
				<p>{TechStrings[filter]}</p>
			</div>
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
