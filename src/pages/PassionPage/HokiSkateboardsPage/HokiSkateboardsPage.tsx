import React from 'react';

import classNames from 'classnames';

import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { ROUTES } from '~const/Routes.const';

import { ChildrensBookColumn } from './ChildrensBookColumn/ChildrensBookColumn';
import { CoverImage } from './CoverImage/CoverImage';
import { Logo } from './Logo/Logo';
import { RetailWebsiteColumn } from './RetailWebsiteColumn/RetailWebsiteColumn';
import { SocialMedia } from './SocialMedia/SocialMedia';

import styles from './HokiSkateboardsPage.module.scss';

export const HokiSkateboardsPage = () => (
	<>
		<PageSeo seoData={PAGE_SEO[ROUTES.HOKI_SKATEBOARDS]} />
		<section className="boxed boxed-lg">
			<Logo />
			<CoverImage />
			<p className={classNames('mb-3', styles.description)}>
				Hoki Skateboards is my passion project. Through the years I have enjoyed
				building to my little company. I&apos;ve made and sold skateboards,
				wrote a children&apos;s book, an app, and met so many cool people.
			</p>
			<SocialMedia />
		</section>
		<section className="boxed boxed-lg">
			<div className={classNames(styles.hokiSkateboardsInnerContent, 'mb-3')}>
				<div className="row gy-3">
					<div className={classNames('col-sm-6 pt-3', styles.column)}>
						<RetailWebsiteColumn />
					</div>
					<div className={classNames('col-sm-6 pt-3', styles.column)}>
						<ChildrensBookColumn />
					</div>
				</div>
			</div>
		</section>
	</>
);
