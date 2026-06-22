import React from 'react';

import classNames from 'classnames';

import { FeaturedProjectsList } from './FeaturedProjectsList/FeaturedProjectsList';
import { ViewAllButton } from './ViewAllButton/ViewAllButton';

import styles from './FeaturedProjects.module.scss';

export const FeaturedProjects = () => (
	<section className={classNames('gray-three', styles.featuredProjects)}>
		<div className="boxed-xl">
			<h2>Featured Projects</h2>
			<FeaturedProjectsList />
			<ViewAllButton />
		</div>
	</section>
);
