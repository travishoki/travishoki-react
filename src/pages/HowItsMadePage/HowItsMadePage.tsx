import React from 'react';

import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { ROUTES } from '~const/Routes.const';

import { HowItsMadeLinks } from './HowItsMadeLinks/HowItsMadeLinks';
import { HowItsMadeList } from './HowItsMadeList/HowItsMadeList';

import styles from './HowItsMadePage.module.scss';

export const HowItsMadePage = () => {
	return (
		<div id="container">
			<PageSeo seoData={PAGE_SEO[ROUTES.HOW_ITS_MADE]} />
			<section className={styles.howItsMadePage}>
				<h2>How This Site Was Made</h2>
				<HowItsMadeLinks />
				<HowItsMadeList />
			</section>
		</div>
	);
};
