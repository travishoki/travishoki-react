import React from 'react';

import classNames from 'classnames';

import { DOWNLOADS, STAGGER_SECONDS } from './DownloadSection.const';
import { DownloadButton } from '../DownloadButton/DownloadButton';

import styles from './DownloadSection.module.scss';

export const DownloadSection = () => (
	<section className="blue ">
		<div className={classNames('boxed', styles.resumeButtons)}>
			{DOWNLOADS.map(({ caption, href, icon, linkTitle, text }, index) => (
				<div key={href}>
					<p className={styles.caption}>{caption}</p>
					<DownloadButton
						delay={index * STAGGER_SECONDS}
						href={href}
						icon={icon}
						text={text}
						title={linkTitle}
					/>
				</div>
			))}
		</div>
	</section>
);
