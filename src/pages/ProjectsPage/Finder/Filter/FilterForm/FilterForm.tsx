import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { TechFilterType } from '~const/Tech.const';

import styles from './FilterForm.module.scss';

export const FilterForm = ({
	filterTerm,
	onChangeFilter,
	onClearAndCloseFilter,
}: FilterFormProps) => (
	<form className={classNames('m-0', styles.filterForm)}>
		<input
			autoFocus
			maxLength={25}
			onChange={onChangeFilter}
			placeholder="Filter by Tech"
			type="text"
			value={filterTerm || ''}
		/>
		<FontAwesomeIcon
			className="pointer f-right"
			icon={faXmark}
			onClick={onClearAndCloseFilter}
		/>
	</form>
);

type FilterFormProps = {
	filterTerm: TechFilterType;
	onChangeFilter: React.ChangeEventHandler<HTMLInputElement>;
	onClearAndCloseFilter: () => void;
};
