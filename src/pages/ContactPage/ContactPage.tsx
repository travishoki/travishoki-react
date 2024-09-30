import React from 'react';

import ImgProfilePic from '~images/global/travis-hoki-2.jpg';

import { ContactInfo } from './ContactInfo';

export const ContactPage = () => (
	<div className="contact" id="container">
		<div className="boxed">
			<h1>Contact Me</h1>

			<div className="row">
				<div className="col-sm-6">
					<img className="content-image" src={ImgProfilePic} />
				</div>

				<div className="col-sm-6">
					<ContactInfo />
				</div>
			</div>
		</div>
	</div>
);
