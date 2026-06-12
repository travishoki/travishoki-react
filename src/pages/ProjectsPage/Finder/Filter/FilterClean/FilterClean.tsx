import React from 'react';

import styles from './FilterClean.module.scss';

export const FilterClean = ({ toggleOpenFilter }: FilterCleanProps) => (
	<div className={`${styles.filterClean} pointer`} onClick={toggleOpenFilter}>
		<p className="m-0">Filter by Tech</p>
		<i className="fa fa-chevron-down" />
	</div>
);

type FilterCleanProps = {
	toggleOpenFilter: () => void;
};
