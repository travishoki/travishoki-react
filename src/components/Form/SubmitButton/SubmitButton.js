import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({
	className,
	disabled,
	value,
}) => (
	<input
		type="submit"
		disabled={disabled}
		value={value}
		className={className}
	/>
);

SubmitButton.propTypes = {
	className: PropTypes.string,
	disabled: PropTypes.bool,
	value: PropTypes.string,
};

SubmitButton.defaultProps = {
	disabled: false,
	value: 'Send',
};

export default SubmitButton;
