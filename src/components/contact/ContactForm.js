import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import TextArea from '../common/TextArea';

const img_profile_pic = require('../../../images/global/travis-hoki-2.jpg');

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
            value={saving ? 'Saving...' : 'Save'}
            className="btn btn-primary btn-lg"
            onClick={onSave}
		/>
    </form>
);

ContactForm.propTypes = {
	onSave: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	saving: PropTypes.bool,
	errors: PropTypes.object
};

export default ContactForm;
