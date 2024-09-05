import React from 'react';

const FilterForm = ({
	filterTerm,
	onChangeFilter,
	onClearAndCloseFilter,
}: FilterFormProps) => (
	<form className="filter-form">
		<input
			className="form-control"
			maxLength={25}
			onChange={onChangeFilter}
			placeholder="Tech Filter"
			type="text"
			value={filterTerm || ''}
		/>
		<i
			className="fa fa-close pointer f-right"
			onClick={onClearAndCloseFilter}
		/>
	</form>
);

type FilterFormProps = {
	filterTerm: string | null;
	onChangeFilter: React.ChangeEventHandler<HTMLInputElement>;
	onClearAndCloseFilter: () => void;
};

export default FilterForm;
