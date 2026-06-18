import React from 'react';

import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { BluehostAffiliate } from './BluehostAffiliate/BluehostAffiliate';
import { SocialIcons } from '../../SocialIcons/SocialIcons';

import styles from './SubFooter.module.scss';

export const SubFooter = () => (
	// `data-app-footer` marks the top of the footer region so layout helpers can
	// measure the space above it (see NotFoundPage Video.helpers).
	<div className={styles.subfooter} data-app-footer>
		<div className={classNames(styles.contactInfo, 'm-2')}>
			<div className={styles.socialContainer}>
				<SocialIcons reverseColors />
			</div>
			<NavLink
				className={classNames(styles.contactLink, 'active ms-3')}
				to="/contact"
			>
				Contact
			</NavLink>
		</div>
		<BluehostAffiliate />
	</div>
);
