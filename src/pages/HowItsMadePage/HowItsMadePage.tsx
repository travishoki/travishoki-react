import React from 'react';

import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { ROUTES } from '~const/Routes.const';

import { HowItsMade } from './HowItsMade/HowItsMade';

export const HowItsMadePage = () => (
	<div id="container">
		<PageSeo seoData={PAGE_SEO[ROUTES.HOW_ITS_MADE]} />
		<HowItsMade />
	</div>
);
