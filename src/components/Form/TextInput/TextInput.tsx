import React from 'react';

import classnames from 'classnames';

export const TextInput = ({
	error,
	label,
	name,
	onChange,
	placeholder,
	value,
}: TextInputProps) => (
	<div
		className={classnames('form-group', {
			'has-error': error && error.length > 0,
		})}
	>
		<label htmlFor={name}>{label}</label>

		<div className="field">
			<input
				className="form-control"
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				type="text"
				value={value}
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	</div>
);

type TextInputProps = {
	error?: string;
	label: string;
	name: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	placeholder: string;
	value: string;
};
