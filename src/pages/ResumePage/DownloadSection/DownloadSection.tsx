import React from 'react';

import { DownloadButton } from './DownloadButton/DownloadButton';
import {
	HERO_DOWNLOAD,
	SECONDARY_DOWNLOADS,
	STAGGER_SECONDS,
} from './DownloadSection.const';

import styles from './DownloadSection.module.scss';

export const DownloadSection = () => (
	<section className="primary-two">
		<div className={styles.resumeButtons}>
			<div className={styles.heroRow}>
				<DownloadButton
					caption={HERO_DOWNLOAD.caption}
					delay={0}
					href={HERO_DOWNLOAD.href}
					icon={HERO_DOWNLOAD.icon}
					isHero
					text={HERO_DOWNLOAD.text}
					title={HERO_DOWNLOAD.linkTitle}
				/>
			</div>
			<div className={styles.secondaryRow}>
				{SECONDARY_DOWNLOADS.map(
					({ caption, href, icon, linkTitle, text }, index) => (
						<DownloadButton
							key={href}
							caption={caption}
							delay={(index + 1) * STAGGER_SECONDS}
							href={href}
							icon={icon}
							text={text}
							title={linkTitle}
						/>
					),
				)}
			</div>
		</div>
	</section>
);
