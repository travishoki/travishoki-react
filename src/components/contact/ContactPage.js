import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import ContactForm from '../contact/ContactForm';
import toastr from 'toastr';

const img_profile_pic = require('../../../images/global/travis-hoki-2.jpg');

class ContactPage extends React.Component {
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

        this.updateContactFormState = this.updateContactFormState.bind(this);
        this.saveContactForm = this.saveContactForm.bind(this);
    }

    updateContactFormState(event) {
        const field = event.target.name;
        const value = event.target.value;
        let message = this.state.message;
        message[field] = event.target.value;
        return this.setState({course: value});
    }

    formIsValid() {
        console.log("formIsValid");
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
        console.log("saveContactForm");
        event.preventDefault();

        if (!this.formIsValid()) {
            return;
        }

        this.setState({saving: true});

        this.props.actions.saveContactForm(this.state.message)
            .then(() => this.redirect())
            .catch(error => {
            console.log('%c%s', 'color: green;', 'Success: actions.saveContactForm');
            console.log("error: "+error);
            toastr.error(error);
            this.setState({saving: false});
        });
    }

  render() {
    return (
        <div id="container" className="contact">
            <div className="boxed">
                <h1>Contact Me</h1>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={img_profile_pic}/>
                    </div>
                    <div className="col-sm-6">
                        <p>Needing full-time or contract work</p>
                        <p>Contact me with comments or critiques</p>
                        <p>801-691-2373</p>
                        <p>travis.hoki@gmail.com</p>
                        <ContactForm
                            onChange={this.updateContactFormState}
                            onSave={this.saveContactForm}
                            errors={this.state.errors}
                            saving={this.state.saving}
                            />
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
    return  {
        email: 'thoki@o.co'
    }
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

ContactPage.propTypes = {
  email: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
