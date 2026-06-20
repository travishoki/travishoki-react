import React from 'react';

import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { ROUTES } from '~const/Routes.const';

import { Content } from './Content/Content';
import { CoverImage } from './CoverImage/CoverImage';
import { Logo } from './Logo/Logo';
import { SocialMedia } from './SocialMedia/SocialMedia';

import styles from './HokiSkateboardsPage.module.scss';

export const HokiSkateboardsPage = () => (
	<>
		<PageSeo seoData={PAGE_SEO[ROUTES.HOKI_SKATEBOARDS]} />
		<section className="boxed boxed-lg">
			<Logo />
			<CoverImage />
			<p className={styles.description}>
				Hoki Skateboards is my passion project. Through the years I have enjoyed
				building to my little company. I&apos;ve made and sold skateboards,
				wrote a children&apos;s book, an app, and met so many cool people.
			</p>
			<SocialMedia />
		</section>
		<section className="boxed boxed-lg">
			<Content />
		</section>
	</>
);
