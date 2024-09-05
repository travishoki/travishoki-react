import React, { useState } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as formActions from '~actions/formActions';
import Form from '~components/Form/Form';
import SubmitButton from '~components/Form/SubmitButton/SubmitButton';
import TextArea from '~components/Form/TextArea/TextArea';
import TextInput from '~components/Form/TextInput/TextInput';
import { FormActionTypes } from '../../redux/actions/actionTypes';

import Message from './Message';

export type MessageType = {
	comment: string;
	email: string;
	name: string;
};

type ErrorType = {
	comment?: string;
	email?: string;
	name?: string;
};

const ContactForm = ({ actions }: ContactFormProps) => {
	const [hasErrorMessage, setHasErrorMessage] = useState(false);
	const [hasSuccessMessage, setHasSuccessMessage] = useState(false);
	const [saving, setSaving] = useState(false);
	const [errors, setErrors] = useState<ErrorType>({});
	const [message, setMessage] = useState<MessageType>({
		comment: '',
		email: '',
		name: '',
	});

	const updateContactFormState = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const field = e.target.name as keyof MessageType;
		const value = e.target.value;
		const newMessage: MessageType = message;

		newMessage[field] = value;

		setMessage(newMessage);
	};

	const formIsValid = () => {
		let formIsValid = true;
		const errorObj: ErrorType = {};

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

	const saveContactForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formIsValid()) return;

		setSaving(true);

		// actions
		// 	.saveContactForm(message)
		// 	.then(() => setHasSuccessMessage(true))
		// 	.catch(() => setHasErrorMessage(true));
	};

	const hasBeenSubmitted = hasErrorMessage || hasSuccessMessage;

	return (
		<>
			<Message
				className="danger"
				isVisible={hasErrorMessage}
				text="Something went wrong. Please try again later."
			/>

			<Message
				className="success"
				isVisible={hasSuccessMessage}
				text="Thanks for sending me an email. I'll get back to you when I can."
			/>

			{!hasBeenSubmitted && (
				<Form onSubmit={saveContactForm}>
					<TextInput
						error={errors.name}
						label="Name"
						name="name"
						onChange={updateContactFormState}
						placeholder="Name"
						value={message.name}
					/>

					<TextInput
						error={errors.email}
						label="Email"
						name="email"
						onChange={updateContactFormState}
						placeholder="Email"
						value={message.email}
					/>

					<TextArea
						error={errors.comment}
						label="Comment"
						name="comment"
						onChange={updateContactFormState}
						placeholder="Comment"
						value={message.comment}
					/>

					<SubmitButton
						className="btn btn-primary btn-lg"
						disabled={saving}
						value={saving ? 'Sending...' : 'Send'}
					/>
				</Form>
			)}
		</>
	);
};

type ContactFormProps = {
	actions: typeof formActions;
};

const mapDispatchToProps = (dispatch: Dispatch<FormActionTypes>) => ({
	actions: bindActionCreators(formActions, dispatch),
});

export default connect(null, mapDispatchToProps)(ContactForm);
