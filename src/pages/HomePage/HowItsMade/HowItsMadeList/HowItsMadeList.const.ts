import { ReadMoreListItem } from '~components/ReadMoreList/ReadMoreList.types';

export const ITEMS: ReadMoreListItem[] = [
	{ text: 'Typed with Typescript' },
	{ text: 'Unit testing with Jest' },
	{ text: 'Eslint for consistent coding style' },
	{ text: 'Storybook for component management' },
	{ text: 'Husky automatically runs scripts' },
	{ text: 'Build with some assistance from Claude Code' },
	{
		link: 'https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US',
		text: 'Accessability optimization using axe DevTools',
	},
];

export const COLLAPSED_COUNT = 3;
