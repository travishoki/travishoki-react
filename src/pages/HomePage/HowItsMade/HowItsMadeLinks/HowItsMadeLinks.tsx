import React from 'react';

import './HowItsMadeLinks.scss';

export const HowItsMadeLinks = () => {
	return (
		<div className="how-its-made-links">
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
	);
};
