import React from 'react';

import './HowItsMade.scss';

export const HowItsMade = () => (
	<section className="how-its-made">
		<h2>How this site was Made</h2>

		<div className="row how-its-made-grid">
			<div className="offset-3 col-sm-3">
				<h3>Source Code</h3>
				<a
					className="how-its-made-link"
					href="https://github.com/travishoki/travishoki-react"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fa fa-github" />
					<span>github.com/travishoki</span>
				</a>
			</div>
			<div className="col-sm-3">
				<h3>Component Library</h3>
				<a
					className="how-its-made-link"
					href="https://travishoki.com/storybook-static"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fa fa-book" />
					<span>Storybook</span>
				</a>
			</div>
		</div>
	</section>
);
