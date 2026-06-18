import React from 'react';

import { ButtonLink } from 'src/pages/PassionPage/ButtonLink/ButtonLink';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import ImgHokiSkateboardsWebsite from '~images/passion/hoki-skateboards/hoki-skateboards-website.jpg';

import { websiteTechList } from './RetailWebsiteColumn.const';
import { PassionLabel } from '../../../PassionLabel/PassionLabel';
import { Title } from '../../../Title/Title';
import { ProjectImage } from '../ProjectImage/ProjectImage';

const LINK = 'https://hokiskateboards.com';

export const RetailWebsiteColumn = () => (
	<>
		<a href={LINK} rel="noreferrer" target="_blank" title="Hoki Skateboards">
			<Title title="Retail Website" />
			<ProjectImage alt="Hoki Skateboards" src={ImgHokiSkateboardsWebsite} />
			<ButtonLink href={LINK} text="Go to Site" />
		</a>

		<PassionLabel>Description:</PassionLabel>
		<p className="indent">
			Hoki Skateboards is a small family-owned online skateboard company.
		</p>
		<p className="indent">
			Built in Wordpress with a custom Wordpress Plugin, using Woocommerce, PHP
			and React.
		</p>

		<TechListCatalogue list={websiteTechList} />
	</>
);
