import React from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { CurrentFilterBase } from '../CurrentFilterBase/CurrentFilterBase';

import styles from './FilterClean.module.scss';

export const FilterClean = ({ toggleOpenFilter }: FilterCleanProps) => (
	<CurrentFilterBase icon={faChevronDown} onClickIcon={toggleOpenFilter}>
		<form className={classNames('m-0', styles.filterClean)}>
			<input
				onClick={toggleOpenFilter}
				placeholder="Filter by Tech"
				readOnly
				type="text"
			/>
		</form>
	</CurrentFilterBase>
);

type FilterCleanProps = {
	toggleOpenFilter: () => void;
};
