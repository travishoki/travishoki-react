import React from 'react';

import classNames from 'classnames';

import { Typewriter } from '~animations/Typewriter';

import { ContactInfoGrid } from './ContactInfoGrid/ContactInfoGrid';
import { GitLink } from './GitLink/GitLink';
import { LinkedInLink } from './LinkedInLink/LinkedInLink';

import styles from './ContactInfo.module.scss';

export const ContactInfo = () => (
	<>
		<div className={classNames(styles.contactInfoHeader, 'mb-3')}>
			<h2>Get In Touch With Me</h2>
			<p>
				<Typewriter text="Travis Hoki" />
			</p>
		</div>

		<ContactInfoGrid />

		<LinkedInLink />
		<GitLink />
	</>
);
