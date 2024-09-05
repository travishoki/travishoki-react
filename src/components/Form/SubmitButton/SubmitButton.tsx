import React from 'react';

const SubmitButton = ({
	className,
	disabled = false,
	value = 'Send',
}: SubmitButtonProps) => (
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

export default SubmitButton;
