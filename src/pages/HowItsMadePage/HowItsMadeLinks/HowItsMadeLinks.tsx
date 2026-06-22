import React from 'react';

import classNames from 'classnames';

import { HowItsMadeLink } from './HowItsMadeLink/HowItsMadeLink';
import { HOW_ITS_MADE_LINKS } from './HowItsMadeLinks.data';

import styles from './HowItsMadeLinks.module.scss';

export const HowItsMadeLinks = () => {
	return (
		<section className="primary-three">
			<div className={classNames('center', styles.howItsMadeLinks)}>
				{HOW_ITS_MADE_LINKS.map(
					({ description, href, icon, itemKey, label }) => (
						<HowItsMadeLink
							key={itemKey}
							description={description}
							href={href}
							icon={icon}
							label={label}
						/>
					),
				)}
			</div>
		</section>
	);
};
