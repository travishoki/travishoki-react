import React from 'react';

import { HowItsMadeLink } from './HowItsMadeLink/HowItsMadeLink';
import { HOW_ITS_MADE_LINKS } from './HowItsMadeLinkList.data';

import styles from './HowItsMadeLinkList.module.scss';

export const HowItsMadeLinkList = () => {
	return (
		<section className="primary-three">
			<div className="boxed">
				<div className={styles.howItsMadeLinks}>
					{HOW_ITS_MADE_LINKS.map(
						({ description, href, icon, itemKey, label }) => (
							<div key={itemKey} className={styles.howItsMadeLinkItem}>
								<HowItsMadeLink
									description={description}
									href={href}
									icon={icon}
									label={label}
								/>
							</div>
						),
					)}
				</div>
			</div>
		</section>
	);
};
