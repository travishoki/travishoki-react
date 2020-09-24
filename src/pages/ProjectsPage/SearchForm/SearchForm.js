import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SearchForm = ({
	onChangeSearch,
	onClearSearchTerm,
	searchTerm,
}) => (
	<form>
		<div
			id="input-holder"
			className={classnames({
				hasSearchTerm: searchTerm,
			})}
		>
			<input
				type="text"
				className="form-control"
				maxLength="25"
				placeholder="Search Term"
				value={searchTerm || ''}
				onChange={onChangeSearch}
			/>
			{searchTerm && (
				<i
					className="fa fa-close"
					onClick={onClearSearchTerm}
				/>
			)}
		</div>
	</form>
);

SearchForm.propTypes = {
	onChangeSearch: PropTypes.func,
	onClearSearchTerm: PropTypes.func,
	searchTerm: PropTypes.string,
};

export default SearchForm;
