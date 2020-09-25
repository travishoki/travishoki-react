import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as courseActions from '../../actions/courseActions';
import Form from '../../components/Form/Form';
import TextInput from '../../components/Form/TextInput/TextInput';
import TextArea from '../../components/Form/TextArea/TextArea';

class ContactForm extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			errors: {},
			saving: false,
			message: {
				name: '',
				email: '',
				comment: ''
			}
		};

		this.formIsValid = this.formIsValid.bind(this);
		this.saveContactForm = this.saveContactForm.bind(this);
		this.updateContactFormState = this.updateContactFormState.bind(this);
	}

	updateContactFormState(event) {
		const field = event.target.name;
		const value = event.target.value;
		let message = this.state.message;

		message[field] = event.target.value;

		return this.setState({course: value});
	}

	formIsValid() {
		let formIsValid = true;
		let errors = {};

		if (this.state.message.name.length < 5) {
			errors.name = 'Name must be at least 5 characters.';
			formIsValid = false;
		}

		if (this.state.message.email.length < 5) {
			errors.email = 'Email must be at least 5 characters.';
			formIsValid = false;
		}

		if (this.state.message.comment.length < 5) {
			errors.comment = 'Comment must be at least 5 characters.';
			formIsValid = false;
		}

		this.setState({errors: errors});

		return formIsValid;
	}

	saveContactForm(event) {
		event.preventDefault();

		if (!this.formIsValid()) {
			return;
		}

		this.setState({ saving: true });

		this.props.actions.saveContactForm(this.state.message)
			.then()
			.catch(() => {
				this.setState({
					saving: false,
					hasErrorMessage: true,
				});
			});
	}

	render() {
		return (
			<Form
				onSubmit={this.saveContactForm}
			>
				<TextInput
					name="name"
					label="Name"
					onChange={this.updateContactFormState}
					placeholder="Name"
					error={this.state.errors.name}
				/>

				<TextInput
					name="email"
					label="Email"
					onChange={this.updateContactFormState}
					placeholder="Email"
					error={this.state.errors.email}
				/>

				<TextArea
					name="comment"
					label="Comment"
					onChange={this.updateContactFormState}
					placeholder="Comment"
					error={this.state.errors.comment}
				/>

				<input
					type="submit"
					disabled={this.saving}
					value={this.saving ? 'Sending...' : 'Send'}
					className="btn btn-primary btn-lg"
				/>
			</Form>
		);
	}
}

ContactForm.propTypes = {
	actions: PropTypes.object,
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(courseActions, dispatch)
});

export default connect(null, mapDispatchToProps)(ContactForm);
