import React from 'react';

import classNames from 'classnames';

import styles from './SearchForm.module.scss';

export const SearchForm = ({
	onChangeSearch,
	onClearSearchTerm,
	searchTerm,
}: SearchFormProps) => (
	<form>
		<div
			className={classNames(styles['input-holder'], {
				[styles['has-search-term']]: searchTerm,
			})}
		>
			<input
				className="form-control"
				maxLength={25}
				onChange={onChangeSearch}
				placeholder="Search Term"
				type="text"
				value={searchTerm || ''}
			/>
			{searchTerm && <i className="fa fa-close" onClick={onClearSearchTerm} />}
		</div>
	</form>
);

type SearchFormProps = {
	onChangeSearch: React.ChangeEventHandler<HTMLInputElement>;
	onClearSearchTerm: () => void;
	searchTerm: string;
};
