import React from 'react';

import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { FilterContainer } from '../FilterContainer/FilterContainer';

import styles from './FilterClean.module.scss';

export const FilterClean = ({ toggleOpenFilter }: FilterCleanProps) => (
	<FilterContainer>
		<form className={classNames('m-0', styles.filterClean)}>
			<input
				onClick={toggleOpenFilter}
				placeholder="Filter by Tech"
				readOnly
				type="text"
			/>
			<FontAwesomeIcon icon={faChevronDown} onClick={toggleOpenFilter} />
		</form>
	</FilterContainer>
);

type FilterCleanProps = {
	toggleOpenFilter: () => void;
};
