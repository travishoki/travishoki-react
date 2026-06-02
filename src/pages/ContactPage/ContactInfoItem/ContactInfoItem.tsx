import React from 'react';

import { ContactInfoItemData } from '../ContactInfo.data';

export const ContactInfoItem = ({ icon, lines }: ContactInfoItemData) => (
	<div className="contact-info-item">
		<i className={`fa ${icon} contact-info-icon`} />
		{lines.map((line, index) => (
			<p key={index}>
				{line.href ? <a href={line.href}>{line.text}</a> : line.text}
			</p>
		))}
	</div>
);
