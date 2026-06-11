import React from 'react';

import { TechIcon } from '~components/TechIcon/TechIcon';
import { TECH, TechFilterType } from '~const/Tech.const';

import './CurrentFilter.scss';

export const CurrentFilter = ({
	filter,
	onClearAndCloseFilter,
}: CurrentFilterProps) => {
	if (!filter || filter === 'all' || filter === 'null') return null;

	const { label } = TECH[filter];

	return (
		<div className="current-filter">
			<div className="tech-container">
				<TechIcon className="current-filter-tech-icon" name={filter} />
				<p>{label}</p>
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
