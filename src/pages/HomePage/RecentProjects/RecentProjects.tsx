import React from 'react';

import { RecentProjectsList } from './RecentProjectsList/RecentProjectsList';
import { ViewAllButton } from './ViewAllButton/ViewAllButton';

import styles from './RecentProjects.module.scss';

export const RecentProjects = () => (
	<section className={styles.recentProjects}>
		<div className="boxed boxed-lg">
			<h2>Recent Projects</h2>
			<RecentProjectsList />
			<ViewAllButton />
		</div>
	</section>
);
