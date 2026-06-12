import React from 'react';

import { StaggeredList } from '~components/StaggeredList/StaggeredList';

import { AboutItem } from './AboutItem/AboutItem';
import { ABOUT_PAGE_DATA } from './AboutPage.data';

export const AboutPage = () => {
	return (
		<div className="about" id="container">
			<h1>About Me</h1>
			<div className="boxed boxed-lg">
				<StaggeredList>
					{ABOUT_PAGE_DATA.map((item, index) => (
						<AboutItem key={index} {...item} />
					))}
				</StaggeredList>
			</div>
		</div>
	);
};
