import React from 'react';

import TechIcon from '~components/TechIcon/TechIcon';

const CurrentFilter = ({
	filter,
	onClearAndCloseFilter,
}: CurrentFilterProps) => {
	if (!filter) return null;

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
	filter: string | null;
	onClearAndCloseFilter: () => void;
};

export default CurrentFilter;
