import React from 'react';

import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { SocialIcons } from '~components/SocialIcons/SocialIcons';
import { ROUTES } from '~const/Routes.const';

import { BluehostAffiliate } from './BluehostAffiliate/BluehostAffiliate';

import styles from './SubFooter.module.scss';

export const SubFooter = () => (
	// `data-app-footer` marks the top of the footer region so layout helpers can
	// measure the space above it (see NotFoundPage Video.helpers).
	<div className={styles.subfooter} data-app-footer>
		<div className={classNames('m-2', styles.contactInfo)}>
			<div className={styles.socialContainer}>
				<SocialIcons reverseColors />
			</div>
			<NavLink
				className={classNames('active ms-3', styles.contactLink)}
				to={ROUTES.CONTACT}
			>
				Contact
			</NavLink>
		</div>
		<BluehostAffiliate />
	</div>
);
