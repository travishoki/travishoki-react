import React from 'react';

import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { ROUTES } from '~const/Routes.const';

import { Diploma } from './Diploma/Diploma';
import { SalesforceTrailhead } from './SalesforceTrailhead/SalesforceTrailhead';
import { Timpanogos } from './Timpanogos/Timpanogos';
import { Uvu } from './Uvu/Uvu';

export const EducationPage = () => (
	<div id="container">
		<PageSeo seoData={PAGE_SEO[ROUTES.EDUCATION]} />
		<h1>Education</h1>
		<SalesforceTrailhead />
		<Uvu />
		<Diploma />
		<Timpanogos />
	</div>
);
