import React from 'react';

import { CONTACT_INFO } from '../ContactInfo.data';
import { ContactInfoItem } from '../ContactInfoItem/ContactInfoItem';
import './ContactInfoGrid.scss';

export const ContactInfoGrid = () => (
	<div className="contact-info-grid">
		{CONTACT_INFO.map((item) => (
			<ContactInfoItem key={item.id} {...item} />
		))}
	</div>
);
