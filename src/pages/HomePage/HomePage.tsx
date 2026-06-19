import React from 'react';

import { Education } from '~components/Education/Education';
import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { ROUTES } from '~const/Routes.const';

import { About } from './About/About';
import { Banner } from './Banner/Banner';
import { CurrentTechInterests } from './CurrentTechInterests/CurrentTechInterests';
import { HowItsMade } from './HowItsMade/HowItsMade';
import { RecentProjects } from './RecentProjects/RecentProjects';
import { Skills } from './Skills/Skills';
import { TechTiles } from './TechTiles/TechTiles';
import { Volunteer } from './Volunteer/Volunteer';

export const HomePage = () => (
	<div className="home" id="container">
		<PageSeo seoData={PAGE_SEO[ROUTES.HOME]} />
		<Banner />
		<About />
		<TechTiles />
		<RecentProjects />
		<Skills />
		<CurrentTechInterests />
		<Education />
		<Volunteer />
		<HowItsMade />
	</div>
);
