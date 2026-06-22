import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook, faBoxOpen } from '@fortawesome/free-solid-svg-icons';

export type HowItsMadeLink = {
	description: string;
	href: string;
	icon: IconDefinition;
	itemKey: string;
	label: string;
};

export const HOW_ITS_MADE_LINKS: HowItsMadeLink[] = [
	{
		itemKey: 'github',
		description: 'Source Code',
		href: 'https://github.com/travishoki/travishoki-react',
		icon: faGithub,
		label: 'Github',
	},
	{
		itemKey: 'package-json',
		description: 'Dependencies',
		href: 'https://github.com/travishoki/travishoki-react/blob/master/package.json',
		icon: faBoxOpen,
		label: 'package.json',
	},
	{
		itemKey: 'component-library',
		description: 'Component Library',
		href: 'https://travishoki.com/storybook-static',
		icon: faBook,
		label: 'Storybook',
	},
];
