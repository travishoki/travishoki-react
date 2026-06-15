import React, { AnchorHTMLAttributes } from 'react';

import classNames from 'classnames';

import styles from './DownloadButton.module.scss';

export const DownloadButton = ({
	icon,
	text,
	...rest
}: DownloadButtonProps) => (
	<a
		className={styles.downloadButton}
		rel="noreferrer"
		target="_blank"
		{...rest}
	>
		<div className={styles.buttonText}>{text}</div>{' '}
		<i className={classNames('fa', icon, styles.icon)} />
	</a>
);

type DownloadButtonProps = {
	href: string;
	icon: string;
	text: string;
	title: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
