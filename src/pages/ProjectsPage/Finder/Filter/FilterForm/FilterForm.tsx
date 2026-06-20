import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import { TechFilterType } from '~const/Tech.const';

import { FilterContainer } from '../FilterContainer/FilterContainer';

import styles from './FilterForm.module.scss';

export const FilterForm = ({
	filterTerm,
	onChangeFilter,
	onClearAndCloseFilter,
}: FilterFormProps) => (
	<FilterContainer icon={faXmark} onClickIcon={onClearAndCloseFilter}>
		<form className={classNames('m-0', styles.filterForm)}>
			<input
				autoFocus
				maxLength={25}
				onChange={onChangeFilter}
				placeholder="Filter by Tech"
				type="text"
				value={filterTerm || ''}
			/>
		</form>
	</FilterContainer>
);

type FilterFormProps = {
	filterTerm: TechFilterType;
	onChangeFilter: React.ChangeEventHandler<HTMLInputElement>;
	onClearAndCloseFilter: () => void;
};
