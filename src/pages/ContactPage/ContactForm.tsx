import React, { useState } from 'react';

import Form from '~components/Form/Form';
import SubmitButton from '~components/Form/SubmitButton/SubmitButton';
import TextArea from '~components/Form/TextArea/TextArea';
import TextInput from '~components/Form/TextInput/TextInput';

import { saveContactForm } from './ContactForm.helpers';
import Message from './Message';

type ErrorType = {
	comment?: string;
	email?: string;
	name?: string;
};

const ContactForm = () => {
	const [hasErrorMessage, setHasErrorMessage] = useState(false);
	const [hasSuccessMessage, setHasSuccessMessage] = useState(false);
	const [saving, setSaving] = useState(false);
	const [errors, setErrors] = useState<ErrorType>({});
	const [comment, setComment] = useState('');
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');

	const formIsValid = () => {
		let formIsValid = true;
		const errorObj: ErrorType = {};

		if (name.length < 5) {
			errorObj.name = 'Name must be at least 5 characters.';
			formIsValid = false;
		}

		if (email.length < 5) {
			errorObj.email = 'Email must be at least 5 characters.';
			formIsValid = false;
		}

		if (comment.length < 5) {
			errorObj.comment = 'Comment must be at least 5 characters.';
			formIsValid = false;
		}

		setErrors(errorObj);

		return formIsValid;
	};

	const handleSaveContactForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!formIsValid()) return;

		setSaving(true);

		saveContactForm({
			comment,
			email,
			name,
		})
			.then(() => setHasSuccessMessage(true))
			.catch(() => setHasErrorMessage(true));
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
				<Form onSubmit={handleSaveContactForm}>
					<TextInput
						error={errors.name}
						label="Name"
						name="name"
						onChange={(e) => setName(e.target.value)}
						placeholder="Name"
						value={name}
					/>

					<TextInput
						error={errors.email}
						label="Email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
						value={email}
					/>

					<TextArea
						error={errors.comment}
						label="Comment"
						name="comment"
						onChange={(e) => setComment(e.target.value)}
						placeholder="Comment"
						value={comment}
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

export default ContactForm;
