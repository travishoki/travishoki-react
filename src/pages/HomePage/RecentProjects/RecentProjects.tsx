import React from 'react';

import { RecentProjectsList } from './RecentProjectsList';
import { ViewAllButton } from './ViewAllButton';

import styles from './RecentProjects.module.scss';

export const RecentProjects = () => (
	<section className={styles['recent-projects']}>
		<h2>Recent Projects</h2>

		<div className="boxed boxed-lg">
			<RecentProjectsList />

			<ViewAllButton />
		</div>
	</section>
);
