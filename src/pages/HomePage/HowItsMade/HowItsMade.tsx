import React from 'react';

import './HowItsMade.scss';

export const HowItsMade = () => (
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
	</section>
);
