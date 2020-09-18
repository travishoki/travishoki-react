import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../components/TextInput/TextInput';
import TextArea from '../../components/TextArea/TextArea';

const ContactForm = ({
	onSave,
	onChange,
	saving,
	errors
}) => (
    <form>
        <TextInput
            name="name"
            label="Name"
            onChange={onChange}
            placeholder="Name"
            error={errors.name}
        />

        <TextInput
            name="email"
            label="Email"
            onChange={onChange}
            placeholder="Email"
            error={errors.email}
        />

        <TextArea
            name="comment"
            label="Comment"
            onChange={onChange}
            placeholder="Comment"
            error={errors.comment}
        />

        <input
            type="submit"
            disabled={saving}
            value={saving ? 'Sending...' : 'Send'}
            className="btn btn-primary btn-lg"
            onClick={onSave}
		/>
    </form>
);

ContactForm.propTypes = {
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	saving: PropTypes.bool,
	errors: PropTypes.object,
};

export default ContactForm;
