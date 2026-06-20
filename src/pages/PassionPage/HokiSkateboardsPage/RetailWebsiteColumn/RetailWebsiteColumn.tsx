import React from 'react';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import ImgHokiSkateboardsWebsite from '~images/passion/hoki-skateboards/hoki-skateboards-website.jpg';

import { techWebsiteList } from './RetailWebsiteColumn.const';
import { ButtonLink } from '../../ButtonLink/ButtonLink';
import { PassionLabel } from '../../PassionLabel/PassionLabel';
import { Title } from '../../Title/Title';
import { ProjectImage } from '../ProjectImage/ProjectImage';

const LINK = 'https://hokiskateboards.com';

export const RetailWebsiteColumn = () => (
	<>
		<Title title="Retail Website" />
		<a href={LINK} rel="noreferrer" target="_blank" title="Hoki Skateboards">
			<ProjectImage alt="Hoki Skateboards" src={ImgHokiSkateboardsWebsite} />
		</a>
		<ButtonLink href={LINK} text="Go to Site" />

		<PassionLabel>Description:</PassionLabel>
		<p className="indent">
			Hoki Skateboards is a small family-owned online skateboard company.
		</p>
		<p className="indent">
			Built in Wordpress with a custom Wordpress Plugin, using Woocommerce, PHP
			and React.
		</p>

		<TechListCatalogue list={techWebsiteList} />
	</>
);
