import React from 'react';

import ImgProfilePic from '../../../images/global/travis-hoki-2.jpg';

import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactPage = () => (
	<div
		id="container"
		className="contact"
	>
		<div className="boxed">
			<h1>Contact Me</h1>

			<div className="row">
				<div className="col-sm-6">
					<img src={ImgProfilePic}/>
				</div>

				<div className="col-sm-6">
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
		</div>
	</div>
);

export default ContactPage;
