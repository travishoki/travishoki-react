import React from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { FilterContainer } from '../FilterContainer/FilterContainer';

import styles from './FilterClean.module.scss';

export const FilterClean = ({ toggleOpenFilter }: FilterCleanProps) => (
	<FilterContainer icon={faChevronDown} onClickIcon={toggleOpenFilter}>
		<form className={classNames('m-0', styles.filterClean)}>
			<input
				onClick={toggleOpenFilter}
				placeholder="Filter by Tech"
				readOnly
				type="text"
			/>
		</form>
	</FilterContainer>
);

type FilterCleanProps = {
	toggleOpenFilter: () => void;
};
