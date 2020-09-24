import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInput = ({
	name,
	label,
	onChange,
	placeholder,
	value,
	error
}) => (
	<div
		className={classnames(
			'form-group',
			{
				'has-error': (error && error.length > 0),
			}
		)}
	>
		<label htmlFor={name}>{label}</label>
		<div className="field">
			<input
				type="text"
				name={name}
				className="form-control"
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	</div>
);

TextInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
};

export default TextInput;
