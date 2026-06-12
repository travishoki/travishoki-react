import React from 'react';

import styles from './FilterClean.module.scss';

export const FilterClean = ({ toggleOpenFilter }: FilterCleanProps) => (
	<div
		className={`${styles.filterClean} filterItem pointer`}
		onClick={toggleOpenFilter}
	>
		<p>Filter by Tech</p>
		<i className="fa fa-chevron-down" />
	</div>
);

type FilterCleanProps = {
	toggleOpenFilter: () => void;
};
