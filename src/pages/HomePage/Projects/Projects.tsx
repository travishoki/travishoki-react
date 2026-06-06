import React from 'react';

import { RecentProjectsList } from './RecentProjectsList';
import { ViewAllButton } from './ViewAllButton';
import './Projects.scss';

export const Projects = () => (
	<section className="projects">
		<h2>Recent Projects</h2>

		<div className="boxed boxed-lg">
			<RecentProjectsList />

			<ViewAllButton />
		</div>
	</section>
);
