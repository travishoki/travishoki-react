import React from 'react';

import classNames from 'classnames';

import styles from './SocialIcons.module.scss';

export const SocialIcons = ({ className }: SocialIconsProps) => (
	<ul className={classNames(styles.socialIcons, className)}>
		<li>
			<a
				href="https://github.com/travishoki/"
				rel="noreferrer"
				target="_blank"
				title="Travis's Github"
			>
				<i className={classNames('fa fa-git', styles.circleIcon)} />
			</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/travishoki"
				rel="noreferrer"
				target="_blank"
				title="Travis's Linked In"
			>
				<i className={classNames('fa fa-linkedin', styles.circleIcon)} />
			</a>
		</li>
	</ul>
);

type SocialIconsProps = {
	className?: string;
};
