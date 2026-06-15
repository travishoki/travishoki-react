import React from 'react';

import classNames from 'classnames';

import styles from './SocialIcons.module.scss';

export const SocialIcons = ({ className, linkClassName }: SocialIconsProps) => (
	<ul className={classNames(styles.socialIcons, className)}>
		<li>
			<a
				className={classNames(styles.link, linkClassName)}
				href="https://github.com/travishoki/"
				rel="noreferrer"
				target="_blank"
				title="Travis's Github"
			>
				<i className={classNames('fa fa-git', styles.icon)} />
			</a>
		</li>
		<li>
			<a
				className={classNames(styles.link, linkClassName)}
				href="https://www.linkedin.com/in/travishoki"
				rel="noreferrer"
				target="_blank"
				title="Travis's Linked In"
			>
				<i className="fa fa-linkedin" />
			</a>
		</li>
	</ul>
);

type SocialIconsProps = {
	className?: string;
	linkClassName?: string;
};
