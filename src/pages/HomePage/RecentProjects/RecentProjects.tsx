import React from 'react';

import { RecentProjectsList } from './RecentProjectsList';
import { ViewAllButton } from './ViewAllButton';
import './RecentProjects.scss';

export const RecentProjects = () => (
	<section className="recent-projects">
		<h2>Recent Projects</h2>

		<div className="boxed boxed-lg">
			<RecentProjectsList />

			<ViewAllButton />
		</div>
	</section>
);
