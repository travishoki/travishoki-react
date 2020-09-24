import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextArea = ({
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
			<textarea
				name={name}
				className="form-control"
				placeholder={placeholder}
				onChange={onChange}
			>{value}</textarea>

			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	</div>
);

TextArea.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	error: PropTypes.string,
};

export default TextArea;
