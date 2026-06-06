import React from 'react';

import './HowItsMade.scss';

export const HowItsMade = () => (
	<section className="how-its-made">
		<h2>How this site was Made</h2>

		<div className="row">
			<div className="col-6 offset-sm-3 col-sm-3">
				<p>Source Code</p>
				<a
					className="how-its-made-link"
					href="https://github.com/travishoki/travishoki-react"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fa fa-github" />
				</a>
			</div>
			<div className="col-6 col-sm-3">
				<p>Component Library</p>
				<a
					className="how-its-made-link"
					href="https://travishoki.com/storybook-static"
					rel="noreferrer"
					target="_blank"
				>
					<i className="fa fa-book" />
				</a>
			</div>
		</div>
	</section>
);
