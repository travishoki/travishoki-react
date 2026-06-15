import React, { AnchorHTMLAttributes } from 'react';

import classNames from 'classnames';
import { HTMLMotionProps, motion } from 'motion/react';

import styles from './DownloadButton.module.scss';

export const DownloadButton = ({
	delay = 0,
	icon,
	text,
	...rest
}: DownloadButtonProps) => (
	<motion.a
		animate={{ scale: 1 }}
		className={styles.downloadButton}
		initial={{ scale: 0.5 }}
		rel="noreferrer"
		target="_blank"
		transition={{ delay, duration: 0.3, ease: 'easeInOut' }}
		{...(rest as HTMLMotionProps<'a'>)}
	>
		<div className={styles.buttonText}>{text}</div>{' '}
		<i className={classNames('fa', icon, styles.icon)} />
	</motion.a>
);

type DownloadButtonProps = {
	delay?: number;
	href: string;
	icon: string;
	text: string;
	title: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
