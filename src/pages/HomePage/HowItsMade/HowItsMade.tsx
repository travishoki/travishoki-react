import React from 'react';

import { ReadMoreList } from '~components/ReadMoreList/ReadMoreList';
import { useIsMobile } from '~helpers/useIsMobile';

import './HowItsMade.scss';

const ITEMS = [
	'Eslint for consistent coding style',
	'Unit tests with Jest',
	'Typescript',
	'Storybook for component management',
	'Husky automatically runs scripts, tests, or linters during Git events',
];

const COLLAPSED_COUNT = 3;

export const HowItsMade = () => {
	const isMobile = useIsMobile();

	return (
		<section className="how-its-made">
			<h2>How This Site Was Made</h2>

			<div className="how-its-made-content">
				<div>
					<a
						className="how-its-made-link"
						href="https://github.com/travishoki/travishoki-react"
						rel="noreferrer"
						target="_blank"
					>
						<i className="fa fa-github" />
						<p className="how-its-made-link-label">Github</p>
						<p className="how-its-made-link-description">Source Code</p>
					</a>
				</div>
				<div>
					<a
						className="how-its-made-link"
						href="https://travishoki.com/storybook-static"
						rel="noreferrer"
						target="_blank"
					>
						<i className="fa fa-book" />
						<p className="how-its-made-link-label">Storybook</p>
						<p className="how-its-made-link-description">Component Library</p>
					</a>
				</div>
			</div>

			<ReadMoreList
				collapsedCount={isMobile ? COLLAPSED_COUNT : ITEMS.length}
				items={ITEMS}
			/>
		</section>
	);
};
