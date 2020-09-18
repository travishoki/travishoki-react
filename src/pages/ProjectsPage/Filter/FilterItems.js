import React from 'react';
import PropTypes from 'prop-types';

import FilterItem from './FilterItem';
import { filterList } from '../ProjectsPage.data';

const FilterItems = ({
	filter,
	filterTerm,
	onClearAndCloseFilter,
	onSelectFilter,
}) => {
	const filterListFiltered = filterList.filter((item) => {
        return filterTerm === null || item.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1;
    });

	if (filterListFiltered.length === 0) {
		return (
			<p className="center">No Results</p>
		);
	}

	return (
		<ul className="tech-icon-list filters">
			{!filterTerm && (
				<li
					onClick={onClearAndCloseFilter}
					className="filter-item tech-icon-item"
				>
					<p>All</p>
				</li>
			)}

			{filterListFiltered.map((item, index) => (
				<FilterItem
					key={index}
					item={item}
					filter={filter}
					onSelectFilter={onSelectFilter}
				/>
			))}
		</ul>
	);
};

FilterItems.propTypes = {
	filter: PropTypes.string,
    filterTerm: PropTypes.string,
	onClearAndCloseFilter: PropTypes.func,
	onSelectFilter: PropTypes.func,
};

export default FilterItems;
