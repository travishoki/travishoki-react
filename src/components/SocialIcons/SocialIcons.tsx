import React from 'react';

import { faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import { ExternalLink } from '~components/ExternalLink/ExternalLink';

import styles from './SocialIcons.module.scss';

export const SocialIcons = ({ className, reverseColors }: SocialIconsProps) => (
	<ul className={classNames(styles.socialIcons, className)}>
		<li>
			<ExternalLink
				className={classNames(styles.link, { [styles.reverse]: reverseColors })}
				href="https://github.com/travishoki/"
				title="Travis's Github"
			>
				<FontAwesomeIcon className={styles.icon} icon={faGit} />
			</ExternalLink>
		</li>
		<li>
			<ExternalLink
				className={classNames(styles.link, { [styles.reverse]: reverseColors })}
				href="https://www.linkedin.com/in/travishoki"
				title="Travis's Linked In"
			>
				<FontAwesomeIcon icon={faLinkedin} />
			</ExternalLink>
		</li>
	</ul>
);

type SocialIconsProps = {
	className?: string;
	reverseColors?: boolean;
};
