import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = ({
	filterTerm,
	onChangeFilter,
	onClearAndCloseFilter,
}) => (
	<form className="filter-form">
		<input
			type="text"
			className="form-control"
			maxLength="25"
			placeholder="Tech Filter"
			value={filterTerm || ''}
			onChange={onChangeFilter}
		/>
		<i
			className="fa fa-close pointer f-right"
			onClick={onClearAndCloseFilter}
		/>
	</form>
);

FilterForm.propTypes = {
	filterTerm: PropTypes.string,
	onChangeFilter: PropTypes.func,
	onClearAndCloseFilter: PropTypes.func,
};

export default FilterForm;
