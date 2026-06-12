import React from 'react';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import ImgHokiSkateboardsWebsite from '~images/passion/hoki-skateboards-website.jpg';

import { websiteTechList } from './RetailWebsiteColumn.const';
import { PassionLabel } from '../../PassionLabel/PassionLabel';
import { Title } from '../../Title/Title';
import { ProjectImage } from '../ProjectImage/ProjectImage';

export const RetailWebsiteColumn = () => (
	<div className="hoki-skateboards-inner-content-col col-sm-6 pt-3">
		<a
			href="https://hokiskateboards.com"
			rel="noreferrer"
			target="_blank"
			title="Hoki Skateboards"
		>
			<Title title="Retail Website" />
			<ProjectImage alt="Hoki Skateboards" src={ImgHokiSkateboardsWebsite} />
			<p className="button-link">Go to Site</p>
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
	</div>
);
