import React from 'react';

import styles from './SearchForm.module.scss';

export const SearchForm = ({
	onChangeSearch,
	onClearSearchTerm,
	searchTerm,
}: SearchFormProps) => (
	<form>
		<div
			className={searchTerm ? styles['has-search-term'] : ''}
			id="input-holder"
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
