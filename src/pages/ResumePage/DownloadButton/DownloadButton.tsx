import React from 'react';

import classNames from 'classnames';

import styles from './DownloadButton.module.scss';

export const DownloadButton = ({
	caption,
	href,
	icon,
	text,
	title,
}: DownloadButtonProps) => (
	<div>
		<a
			className={`btn btn-secondary btn-lg ${styles.downloadButton}`}
			href={href}
			rel="noreferrer"
			target="_blank"
			title={title}
		>
			{text} <i className={classNames('fa', icon)} />
		</a>
		{caption && <p className={styles.caption}>({caption})</p>}
	</div>
);

type DownloadButtonProps = {
	caption?: string;
	href: string;
	icon: string;
	text: string;
	title: string;
};
