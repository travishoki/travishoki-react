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
				<i className="circ-sm fa fa-git" />
			</a>
		</li>
		<li>
			<a
				href="https://www.linkedin.com/in/travishoki"
				rel="noreferrer"
				target="_blank"
				title="Travis's Linked In"
			>
				<i className="circ-sm fa fa-linkedin" />
			</a>
		</li>
	</ul>
);

type SocialIconsProps = {
	className?: string;
};
