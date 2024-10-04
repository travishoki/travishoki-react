import React from 'react';

import { ABOUT_PAGE_DATA } from './AboutPage.data';
import { AboutItem } from './AboutItem';

export const AboutPage = () => {
	return (
		<div className="about" id="container">
			<div className="boxed boxed-lg">
				<h1>About Me</h1>

				<ul className="staggered">
					{ABOUT_PAGE_DATA.map((item, index) => (
						<AboutItem key={index} {...item} />
					))}
				</ul>
			</div>
		</div>
	);
};
