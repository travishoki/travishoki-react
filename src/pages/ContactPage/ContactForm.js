import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from './Message';
import * as formActions from '../../actions/formActions';
import Form from '../../components/Form/Form';
import SubmitButton from '../../components/Form/SubmitButton/SubmitButton';
import TextInput from '../../components/Form/TextInput/TextInput';
import TextArea from '../../components/Form/TextArea/TextArea';

const ContactForm = ({
	actions,
}) => {
	const [ hasErrorMessage, setHasErrorMessage ] = useState(false);
	const [ hasSuccessMessage, setHasSuccessMessage ] = useState(false);
	const [ saving, setSaving ] = useState(false);
	const [ errors, setErrors ] = useState({});
	const [ message, setMessage ] = useState({
		name: '',
		email: '',
		comment: ''
	});

	const updateContactFormState = (event) => {
		const field = event.target.name;
		const value = event.target.value;
		const newMessage = message;

		newMessage[field] = value;

		setMessage(newMessage);
	};

	const formIsValid = () => {
		let formIsValid = true;
		let errorObj = {};

		if (message.name.length < 5) {
			errorObj.name = 'Name must be at least 5 characters.';
			formIsValid = false;
		}

		if (message.email.length < 5) {
			errorObj.email = 'Email must be at least 5 characters.';
			formIsValid = false;
		}

		if (message.comment.length < 5) {
			errorObj.comment = 'Comment must be at least 5 characters.';
			formIsValid = false;
		}

		setErrors(errorObj);

		return formIsValid;
	};

	const saveContactForm = (event) => {
		event.preventDefault();

		if (!formIsValid()) return;

		setSaving(true);

		actions.saveContactForm(message)
			.then(() => setHasSuccessMessage(true))
			.catch(() => setHasErrorMessage(true));
	};

	const hasBeenSubmitted = hasErrorMessage || hasSuccessMessage;

	return (
		<Fragment>
			<Message
				text="Something went wrong. Please try again later."
				isVisible={hasErrorMessage}
				className="danger"
			/>

			<Message
				text="Thanks for sending me an email. I'll get back to you when I can."
				isVisible={hasSuccessMessage}
				className="success"
			/>

			{!hasBeenSubmitted && (
				<Form
					onSubmit={saveContactForm}
				>
					<TextInput
						name="name"
						label="Name"
						onChange={updateContactFormState}
						placeholder="Name"
						error={errors.name}
					/>

					<TextInput
						name="email"
						label="Email"
						onChange={updateContactFormState}
						placeholder="Email"
						error={errors.email}
					/>

					<TextArea
						name="comment"
						label="Comment"
						onChange={updateContactFormState}
						placeholder="Comment"
						error={errors.comment}
					/>

					<SubmitButton
						className="btn btn-primary btn-lg"
						disabled={saving}
						value={saving ? 'Sending...' : 'Send'}
					/>
				</Form>
			)}
		</Fragment>
	);
};

ContactForm.propTypes = {
	actions: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(formActions, dispatch)
});

export default connect(null, mapDispatchToProps)(ContactForm);
