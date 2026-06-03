import React from 'react';

import ImgProfilePic from '~images/global/travis-hoki-2.jpg';

import { ContactInfo } from './ContactInfo';
import './ContactPage.scss';

export const ContactPage = () => (
	<div className="contact" id="container">
		<h1 className="bottom-border">Contact Me</h1>
		<div className="boxed boxed-lg">
			<div className="contact-content">
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
	</div>
);
