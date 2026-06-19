import React from 'react';

import { PageSeo } from '~components/PageSeo/PageSeo';
import { PAGE_SEO } from '~components/PageSeo/PageSeo.data';
import { ROUTES } from '~const/Routes.const';

import { Finder } from './Finder/Finder';
import { NoResults } from './NoResults/NoResults';
import { ProjectList } from './ProjectList/ProjectList';
import { FILTER_LIST } from './ProjectsPage.const';
import { useProjectFiltering } from './ProjectsPage.hooks';
import { ViewControl } from './ViewControl/ViewControl';

import styles from './ProjectsPage.module.scss';

const projectLink = '/project';

export const ProjectsPage = () => {
	const {
		filter,
		filterTerm,
		grid,
		onClearFilter,
		onClearSearchTerm,
		projects,
		searchTerm,
		setFilter,
		setFilterTerm,
		setGrid,
		setSearchTerm,
	} = useProjectFiltering();

	return (
		<div className="projects" id="container">
			<PageSeo seoData={PAGE_SEO[ROUTES.PROJECTS]} />
			<h1>Projects</h1>

			<div className={styles.projectsContainer}>
				<Finder
					filter={filter}
					filterList={FILTER_LIST}
					filterTerm={filterTerm}
					onClearFilter={onClearFilter}
					onClearSearchTerm={onClearSearchTerm}
					projectsLength={projects.length}
					searchTerm={searchTerm}
					setFilter={setFilter}
					setFilterTerm={setFilterTerm}
					setSearchTerm={setSearchTerm}
				/>

				{projects.length > 0 && (
					<>
						<ViewControl grid={grid} toggleView={() => setGrid(!grid)} />

						<ProjectList
							grid={grid}
							projectLink={projectLink}
							projects={projects}
						/>
					</>
				)}

				{projects.length === 0 && (
					<NoResults
						filter={filter}
						onClearFilter={onClearFilter}
						onClearSearchTerm={onClearSearchTerm}
						searchTerm={searchTerm}
					/>
				)}
			</div>
		</div>
	);
};
