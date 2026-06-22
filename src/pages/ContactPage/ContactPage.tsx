import React from 'react';

import { ImgPopIn } from '~animations/ImgPopIn';
import ImgProfilePic from '~images/global/travis-hoki-2.jpg';

import { ContactInfo } from './ContactInfo/ContactInfo';

export const ContactPage = () => (
	<div className="contact" id="container">
		<h1>Contact Me</h1>
		<div className="boxed boxed-lg">
			<div className="pt-4">
				<div className="row gy-3">
					<div className="col-sm-6">
						<ImgPopIn
							alt="Travis Hoki Profile Picture"
							className="pb-3"
							src={ImgProfilePic}
						/>
					</div>
					<div className="col-sm-6">
						<ContactInfo />
					</div>
				</div>
			</div>
		</div>
	</div>
);
