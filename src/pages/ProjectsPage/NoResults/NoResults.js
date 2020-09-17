import React from 'react';
import PropTypes from 'prop-types';

const NoResults = ({
	filter,
	onClearFilter,
	onClearSearchTerm,
	searchTerm,
}) => (
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

NoResults.propTypes = {
	filter: PropTypes.string,
	onClearFilter: PropTypes.func,
	onClearSearchTerm: PropTypes.func,
	searchTerm: PropTypes.string,
};

export default NoResults;
