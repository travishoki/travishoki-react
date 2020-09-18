import React from 'react';
import PropTypes from 'prop-types';

const FilterClean = ({
	toggleOpenFilter,
}) => (
	<div
		onClick={toggleOpenFilter}
		className="filter-clean filter-item pointer"
	>
		<p className="f-left">Filter by Tech</p>
		<i className="fa fa-chevron-down f-right"/>
	</div>
);

FilterClean.propTypes = {
    toggleOpenFilter: PropTypes.func,
};

export default FilterClean;
