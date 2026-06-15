import React from 'react';

import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { BluehostAffiliate } from './BluehostAffiliate/BluehostAffiliate';
import { SocialIcons } from '../../SocialIcons/SocialIcons';

import styles from './SubFooter.module.scss';

export const SubFooter = () => (
	<div className={styles.subfooter}>
		<div className={classNames(styles.contactInfo, 'm-2')}>
			<div className={styles.socialContainer}>
				<SocialIcons linkClassName={styles.subfooterSocial} />
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
