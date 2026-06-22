import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';

import { HOW_ITS_MADE_LINKS } from './HowItsMadeLinks.data';

import styles from './HowItsMadeLinks.module.scss';

export const HowItsMadeLinks = () => {
	return (
		<section className="primary-three">
			<div className={classNames('center', styles.howItsMadeLinks)}>
				{HOW_ITS_MADE_LINKS.map(
					({ description, href, icon, itemKey, label }) => (
						<ExternalLink
							key={itemKey}
							className={styles.howItsMadeLink}
							href={href}
						>
							<FontAwesomeIcon icon={icon} />
							<p className={styles.howItsMadeLinkLabel}>{label}</p>
							<p className={styles.howItsMadeLinkDescription}>{description}</p>
						</ExternalLink>
					),
				)}
			</div>
		</section>
	);
};
