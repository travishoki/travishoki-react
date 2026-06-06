import React from 'react';

import './HowItsMade.scss';

export const HowItsMade = () => (
	<section className="how-its-made">
		<h2>How this site was Made</h2>

		<div className="how-its-made-content">
			<div>
				<a
					className="how-its-made-link"
					href="https://github.com/travishoki/travishoki-react"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fa fa-github" />
				</a>
				<p className="how-its-made-link-label">Github</p>
				<p className="how-its-made-link-description">Source Code</p>
			</div>
			<div>
				<a
					className="how-its-made-link"
					href="https://travishoki.com/storybook-static"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fa fa-book" />
				</a>
				<p className="how-its-made-link-label">Storybook</p>
				<p className="how-its-made-link-description">Component Library</p>
			</div>
		</div>
	</section>
);
