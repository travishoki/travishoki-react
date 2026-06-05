import React from 'react';

import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import {
	CSS,
	HTML,
	JAVASCRIPT,
	PHP,
	REACT_JS,
	TechKey,
	WORDPRESS,
} from '~const/Tech.const';
import ImgHokiSkateboardsWebsite from '~images/passion/hoki-skateboards-website.jpg';

import { PassionLabel } from '../../PassionLabel/PassionLabel';
import { Title } from '../../Title/Title';

const websiteTechList: TechKey[] = [
	CSS,
	HTML,
	JAVASCRIPT,
	PHP,
	REACT_JS,
	WORDPRESS,
];

export const RetailWebsiteColumn = () => (
	<div className="hoki-skateboards-inner-content-col col-sm-6 pt-3">
		<a
			href="https://hokiskateboards.com"
			rel="noreferrer"
			target="_blank"
			title="Hoki Skateboards"
		>
			<Title title="Retail Website" />
			<img
				alt="Hoki Skateboards"
				className="center product-image"
				src={ImgHokiSkateboardsWebsite}
			/>
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
