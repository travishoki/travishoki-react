import React from 'react';

export const NoResults = ({
	filter,
	isVisible = false,
	onClearFilter,
	onClearSearchTerm,
	searchTerm,
}: NoResultsProps) => {
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

type NoResultsProps = {
	filter: string | null;
	isVisible: boolean;
	onClearFilter: () => void;
	onClearSearchTerm: () => void;
	searchTerm: string;
};
