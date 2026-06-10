import React from 'react';

import { ReadMoreList } from '~components/ReadMoreList/ReadMoreList';
import { useIsMobile } from '~helpers/useIsMobile';
import './HowItsMadeList.scss';

const ITEMS = [
	'Eslint for consistent coding style',
	'Unit tests with Jest',
	'Typescript',
	'Storybook for component management',
	'Husky automatically runs scripts, tests, or linters during Git events',
];

const COLLAPSED_COUNT = 3;

export const HowItsMadeList = () => {
	const isMobile = useIsMobile();

	return (
		<ReadMoreList
			collapsedCount={isMobile ? COLLAPSED_COUNT : ITEMS.length}
			items={ITEMS}
			listClassName="how-its-made-list"
		/>
	);
};
