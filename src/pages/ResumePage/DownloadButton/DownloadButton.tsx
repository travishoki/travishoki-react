import React, { AnchorHTMLAttributes } from 'react';

import classNames from 'classnames';

import styles from './DownloadButton.module.scss';

export const DownloadButton = ({
	caption,
	icon,
	text,
	...rest
}: DownloadButtonProps) => (
	<div className={styles.buttonContainer}>
		{caption && <p className={styles.caption}>({caption})</p>}
		<a
			className={styles.downloadButton}
			rel="noreferrer"
			target="_blank"
			{...rest}
		>
			<div className={styles.buttonText}>{text}</div>{' '}
			<i className={classNames('fa', icon, styles.icon)} />
		</a>
	</div>
);

type DownloadButtonProps = {
	caption?: string;
	href: string;
	icon: string;
	text: string;
	title: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
