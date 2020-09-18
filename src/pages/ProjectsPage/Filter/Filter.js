import React from 'react';
import PropTypes from 'prop-types';

import CurrentFilter from './CurrentFilter';

const Filter = ({
	filter,
	onClearAndCloseFilter,
}) => (
	<CurrentFilter
		filter={filter}
		onClearAndCloseFilter={onClearAndCloseFilter}
	/>
);

Filter.propTypes = {
	filter: PropTypes.string,
	onClearAndCloseFilter: PropTypes.func,
};

export default Filter;
