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
			<p className="m-0">
				<Typewriter className={styles.name} text="Travis Hoki" />
			</p>
			<p>Senior Software Development Engineer</p>
		</div>

		<ContactInfoGrid />

		<LinkedInLink />
		<GitLink />
	</>
);
