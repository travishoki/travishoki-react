import React, { AnchorHTMLAttributes } from 'react';

import { faDownload, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { HTMLMotionProps, motion } from 'motion/react';

import styles from './DownloadButton.module.scss';

const ICON_MAP = {
	faDownload,
	faLink,
};

export const DownloadButton = ({
	caption,
	delay = 0,
	icon,
	isHero = false,
	text,
	...rest
}: DownloadButtonProps) => (
	<motion.a
		animate={{ scale: 1 }}
		className={classNames(styles.downloadButton, {
			[styles.hero]: isHero,
			[styles.secondary]: !isHero,
		})}
		initial={{ scale: 0.5 }}
		rel="noreferrer"
		target="_blank"
		transition={{ delay, duration: 0.3, ease: 'easeInOut' }}
		{...(rest as HTMLMotionProps<'a'>)}
	>
		<div className={styles.buttonText}>
			<span className={styles.label}>{text}</span>
			{caption && <span className={styles.caption}>{caption}</span>}
		</div>
		<div className={styles.icon}>
			<FontAwesomeIcon className={styles.iconSvg} icon={ICON_MAP[icon]} />
		</div>
	</motion.a>
);

type DownloadButtonProps = {
	caption?: string;
	delay?: number;
	href: string;
	icon: keyof typeof ICON_MAP;
	isHero?: boolean;
	text: string;
	title: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;
