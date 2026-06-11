import React from 'react';

import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { BluehostAffiliate } from './BluehostAffiliate/BluehostAffiliate';
import { SocialIcons } from '../../SocialIcons/SocialIcons';

import styles from './SubFooter.module.scss';

export const SubFooter = () => (
	<div className={styles.subfooter}>
		<div className={classNames(styles['contact-info'], 'm-2')}>
			<SocialIcons className={styles['subfooter-social']} />
			<NavLink
				className={classNames(styles['contact-link'], 'active ms-3')}
				to="/contact"
			>
				Contact
			</NavLink>
		</div>
		<BluehostAffiliate />
	</div>
);
