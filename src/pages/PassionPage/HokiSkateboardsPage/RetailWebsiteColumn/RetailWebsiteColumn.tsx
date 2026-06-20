import React from 'react';

import { ParagraphBlock } from '~components/ParagraphBlock/ParagraphBlock';
import { TechListCatalogue } from '~components/TechListCatalogue/TechListCatalogue';
import ImgHokiSkateboardsWebsite from '~images/passion/hoki-skateboards/hoki-skateboards-website.jpg';

import { techWebsiteList } from './RetailWebsiteColumn.const';
import { ButtonLink } from '../../ButtonLink/ButtonLink';
import { Title } from '../../Title/Title';
import { ProjectImageLink } from '../ProjectImageLink/ProjectImageLink';

const LINK = 'https://hokiskateboards.com';

export const RetailWebsiteColumn = () => (
	<>
		<Title title="Retail Website" />
		<ProjectImageLink
			alt="Hoki Skateboards"
			href={LINK}
			src={ImgHokiSkateboardsWebsite}
			title="Hoki Skateboards"
		/>
		<ButtonLink href={LINK} text="Go to Site" />

		<ParagraphBlock
			label="Description"
			text={[
				'Hoki Skateboards is a small family-owned online skateboard company.',
				'Built in Wordpress with a custom Wordpress Plugin, using Woocommerce, PHP and React.',
			]}
		/>

		<TechListCatalogue list={techWebsiteList} />
	</>
);
