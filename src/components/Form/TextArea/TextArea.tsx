import React from 'react';

import classnames from 'classnames';

export const TextArea = ({
	error,
	label,
	name,
	onChange,
	placeholder,
	value,
}: TextAreaProps) => (
	<div
		className={classnames('form-group', {
			'has-error': error && error.length > 0,
		})}
	>
		<label htmlFor={name}>{label}</label>

		<div className="field">
			<textarea
				className="form-control"
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	</div>
);

type TextAreaProps = {
	error?: string;
	label: string;
	name: string;
	onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
	placeholder: string;
	value: string;
};
