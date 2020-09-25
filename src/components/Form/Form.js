import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
	children,
	onSubmit,
}) => (
	<form
		onSubmit={(event) => {
			event.preventDefault();

			onSubmit(event);
		}}
	>
		{children}
	</form>
);

Form.propTypes = {
	children: PropTypes.node,
	onSubmit: PropTypes.func,
};

export default Form;
