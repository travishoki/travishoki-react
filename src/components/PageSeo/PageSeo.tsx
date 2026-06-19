import React from 'react';

import { Helmet } from 'react-helmet-async';

import {
	BASE_URL,
	DEFAULT_DESCRIPTION,
	DEFAULT_IMAGE,
	SITE_NAME,
} from './PageSeo.const';

interface PageSeoProps {
	seoData: {
		canonical?: string;
		description?: string;
		image?: string;
		title: string;
	};
}

export const PageSeo = ({ seoData }: PageSeoProps) => {
	const {
		canonical,
		description = DEFAULT_DESCRIPTION,
		image = DEFAULT_IMAGE,
		title,
	} = seoData;
	const fullTitle = `${title} | Travis Hoki`;
	const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;

	return (
		<Helmet>
			<title>{fullTitle}</title>
			<meta content={description} name="description" />
			{canonicalUrl && <link href={canonicalUrl} rel="canonical" />}

			<meta content={fullTitle} property="og:title" />
			<meta content={description} property="og:description" />
			<meta content={image} property="og:image" />
			{canonicalUrl && <meta content={canonicalUrl} property="og:url" />}

			<meta content={fullTitle} name="twitter:title" />
			<meta content={description} name="twitter:description" />
			<meta content={image} name="twitter:image" />
		</Helmet>
	);
};

PageSeo.defaultTitle = SITE_NAME;
