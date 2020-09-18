import React from 'react';
import PropTypes from 'prop-types';

const FilterForm = ({
	filterTerm,
	onChangeFilter,
}) => (
	<form>
		<input
			type="text"
			className="form-control"
			maxLength="25"
			placeholder="Tech Filter"
			value={filterTerm || ''}
			onChange={onChangeFilter}
		/>
	</form>
);

FilterForm.propTypes = {
	filterTerm: PropTypes.string,
	onChangeFilter: PropTypes.func,
};

export default FilterForm;
