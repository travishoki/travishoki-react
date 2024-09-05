import React from 'react';

const SubmitButton = ({ className, disabled, value }: SubmitButtonProps) => (
	<input
		className={className}
		disabled={disabled}
		type="submit"
		value={value}
	/>
);

type SubmitButtonProps = {
	className: string;
	disabled: boolean;
	value: string;
};

SubmitButton.defaultProps = {
	disabled: false,
	value: 'Send',
};

export default SubmitButton;
