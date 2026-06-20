import React from 'react';

import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { ROUTES } from '~const/Routes.const';

import { HowItsMadeLinks } from './HowItsMadeLinks/HowItsMadeLinks';
import { HowItsMadeList } from './HowItsMadeList/HowItsMadeList';

export const HowItsMadePage = () => {
	return (
		<div id="container">
			<PageSeo seoData={PAGE_SEO[ROUTES.HOW_ITS_MADE]} />
			<h1>How This Site Was Made</h1>
			<HowItsMadeLinks />
			<HowItsMadeList />
		</div>
	);
};
