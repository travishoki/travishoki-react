import React from 'react';

import { Content } from './Content/Content';
import { CoverImage } from './CoverImage/CoverImage';
import { MobileApp } from './MobileApp/MobileApp';
import { SocialMedia } from './SocialMedia/SocialMedia';

import styles from './HokiSkateboards.module.scss';

export const HokiSkateboards = () => (
	<section className="boxed boxed-lg p-3">
		<CoverImage />
		<p className={styles.passionProjectDescription}>
			Hoki Skateboards is my passion project. Through the years I have enjoyed
			building to my little company. I&apos;ve made and sold skateboards, wrote
			a children&apos;s book, an app, and met so many cool people.
		</p>
		<SocialMedia />
		<Content />
		<MobileApp />
	</section>
);
