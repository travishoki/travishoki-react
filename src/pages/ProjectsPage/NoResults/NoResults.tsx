import React from 'react';

import { getLabelByKey } from '~helpers/projects';

import styles from './NoResults.module.scss';

export const NoResults = ({
	filter,
	onClearFilter,
	onClearSearchTerm,
	searchTerm,
}: NoResultsProps) => {
	const filterLabel = filter ? getLabelByKey(filter) : null;

	return (
		<div className={styles.noResults}>
			<h2>No Results</h2>
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
	onClearFilter: () => void;
	onClearSearchTerm: () => void;
	searchTerm: string;
};
