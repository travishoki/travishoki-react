import React from 'react';

import { StaggeredList } from '~components/StaggeredList/StaggeredList';

import { AboutItem } from './AboutItem/AboutItem';
import { ABOUT_PAGE_DATA } from './AboutPage.data';
import { Intro } from './Intro/Intro';

export const AboutPage = () => {
	return (
		<div className="about" id="container">
			<h1>About Me</h1>
			<Intro />
			<div className="boxed-lg">
				<StaggeredList>
					{ABOUT_PAGE_DATA.map((item) => (
						<AboutItem key={item.itemKey} {...item} />
					))}
				</StaggeredList>
			</div>
		</div>
	);
};
