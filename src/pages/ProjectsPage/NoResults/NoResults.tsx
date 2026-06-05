import React from 'react';

import { getLabelByKey } from '~helpers/getLabelByKey';
import './NoResults.scss';

export const NoResults = ({
	filter,
	isVisible = false,
	onClearFilter,
	onClearSearchTerm,
	searchTerm,
}: NoResultsProps) => {
	if (!isVisible) return null;

	const filterLabel = filter ? getLabelByKey(filter) : null;

	return (
		<div className="no-results">
			<h2>No results</h2>
			<p>Clear filter and search terms to find more results.</p>

			{filter && (
				<p onClick={onClearFilter}>
					Filter: {filterLabel} <i className="fa fa-close" />
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
