import React from 'react';

import { faGit, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';

import styles from './SocialIcons.module.scss';

export const SocialIcons = ({ className, reverseColors }: SocialIconsProps) => (
	<ul className={classNames(styles.socialIcons, className)}>
		<li>
			<a
				className={classNames(styles.link, { [styles.reverse]: reverseColors })}
				href="https://github.com/travishoki/"
				rel="noreferrer"
				target="_blank"
				title="Travis's Github"
			>
				<FontAwesomeIcon className={styles.icon} icon={faGit} />
			</a>
		</li>
		<li>
			<a
				className={classNames(styles.link, { [styles.reverse]: reverseColors })}
				href="https://www.linkedin.com/in/travishoki"
				rel="noreferrer"
				target="_blank"
				title="Travis's Linked In"
			>
				<FontAwesomeIcon icon={faLinkedin} />
			</a>
		</li>
	</ul>
);

type SocialIconsProps = {
	className?: string;
	reverseColors?: boolean;
};
