import React from 'react';

import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { StaggeredList } from '~components/StaggeredList/StaggeredList';
import { ROUTES } from '~const/Routes.const';

import { AboutItem } from './AboutItem/AboutItem';
import { ABOUT_PAGE_DATA } from './AboutPage.data';
import { Intro } from './Intro/Intro';

export const AboutPage = () => {
	return (
		<div className="about" id="container">
			<PageSeo seoData={PAGE_SEO[ROUTES.ABOUT]} />
			<h1>About Me</h1>
			<div className="boxed boxed-lg">
				<Intro />
				<StaggeredList>
					{ABOUT_PAGE_DATA.map((item) => (
						<AboutItem key={item.itemKey} {...item} />
					))}
				</StaggeredList>
			</div>
		</div>
	);
};
