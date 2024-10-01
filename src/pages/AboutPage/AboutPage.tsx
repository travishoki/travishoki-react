import React from 'react';

import { AboutPageData } from './AboutPage.data';
import { AboutItem } from './AboutItem';

export const AboutPage = () => {
	return (
		<div className="about" id="container">
			<div className="boxed boxed-lg">
				<h1>About Me</h1>

				<ul className="staggered">
					{AboutPageData.map((item, index) => (
						<AboutItem key={index} {...item} />
					))}
				</ul>
			</div>
		</div>
	);
};
