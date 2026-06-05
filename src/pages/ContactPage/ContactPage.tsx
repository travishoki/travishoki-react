import React from 'react';

import ImgProfilePic from '~images/global/travis-hoki-2.jpg';

import { ContactInfo } from './ContactInfo/ContactInfo';
export const ContactPage = () => (
	<div className="contact" id="container">
		<h1>Contact Me</h1>
		<div className="boxed boxed-lg">
			<div className="pt-4">
				<div className="row">
					<div className="col-sm-6">
						<img className="pb-3" src={ImgProfilePic} />
					</div>

					<div className="col-sm-6">
						<ContactInfo />
					</div>
				</div>
			</div>
		</div>
	</div>
);
