import React from 'react';
import PropTypes from 'prop-types';

const NoResults = ({
	filter,
	isVisible,
	onClearFilter,
	onClearSearchTerm,
	searchTerm,
}) => {
	if (!isVisible) return null;

	return (
		<div className="no-results">
			<h3>No results</h3>
			<p>Clear filter and search terms to find more results.</p>

			{filter && (
				<p onClick={onClearFilter}>
					Filter: {filter} <i className="fa fa-close" />
				</p>
			)}

			{searchTerm && (
				<p onClick={onClearSearchTerm}>
					Search Term: {searchTerm} <i className="fa fa-close" />
				</p>
			)}
		</div>
	);
};

NoResults.propTypes = {
	filter: PropTypes.string,
	isVisible: PropTypes.bool,
	onClearFilter: PropTypes.func,
	onClearSearchTerm: PropTypes.func,
	searchTerm: PropTypes.string,
};

NoResults.propTypes = {
	isVisible: false,
};

export default NoResults;
