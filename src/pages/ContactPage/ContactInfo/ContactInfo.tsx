import React from 'react';

import { ContactInfoGrid } from './ContactInfoGrid/ContactInfoGrid';
import { LinkedInLink } from './LinkedInLink/LinkedInLink';

import styles from './ContactInfo.module.scss';

export const ContactInfo = () => (
	<>
		<div className={`${styles.contactInfoHeader} mb-3`}>
			<h2>Get In Touch With Me</h2>
			<p>Travis Hoki</p>
		</div>

		<ContactInfoGrid />

		<LinkedInLink />
	</>
);
