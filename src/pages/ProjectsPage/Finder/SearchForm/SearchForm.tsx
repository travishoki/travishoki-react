import React from 'react';

import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './SearchForm.module.scss';

export const SearchForm = ({
	onChangeSearch,
	onClearSearchTerm,
	searchTerm,
}: SearchFormProps) => (
	<form>
		<div
			className={classNames(styles.inputHolder, {
				[styles.hasSearchTerm]: searchTerm,
			})}
		>
			<input
				className={styles.input}
				maxLength={25}
				onChange={onChangeSearch}
				placeholder="Search Term"
				type="text"
				value={searchTerm || ''}
			/>
			{searchTerm && (
				<FontAwesomeIcon icon={faXmark} onClick={onClearSearchTerm} />
			)}
		</div>
	</form>
);

type SearchFormProps = {
	onChangeSearch: React.ChangeEventHandler<HTMLInputElement>;
	onClearSearchTerm: () => void;
	searchTerm: string;
};
