import React, { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import classnames from 'classnames';

import { TechFilterType, TechKeys } from '~const/Tech.const';

import { ProjectType } from '../ProjectsPage.data';
import {
	filterProjects,
	createProjectsPageUrl,
} from './ProjectGallery.helpers';
import { NoResults } from './NoResults/NoResults';
import { Projects } from './Projects/Projects';

import './ProjectGallery.scss';
import { Finder } from './Finder/Finder';

const PROJECTS_PAGE_URL = '/projects';

export const ProjectGallery = ({
	filterList,
	projectLink,
	projectsData,
}: ProjectGalleryProps) => {
	const { paramFilter, paramSearch } = useParams();
	const navigate = useNavigate();

	let initialFilter: TechFilterType = null;

	if (paramFilter) {
		const noFilter = paramFilter !== 'all' && paramFilter !== 'null';

		if (noFilter) {
			initialFilter = paramFilter as TechFilterType;
		}
	}

	const initialSearch = paramSearch ?? '';

	const [filter, setFilter] = useState<TechFilterType>(initialFilter);
	const [filterTerm, setFilterTerm] = useState<TechFilterType>(initialFilter);
	const [grid, setGrid] = useState(true);
	const [searchTerm, setSearchTerm] = useState(initialSearch);

	const onClearFilter = () => {
		const newLocation = createProjectsPageUrl(PROJECTS_PAGE_URL);

		navigate(newLocation);

		setFilter(null);
		setFilterTerm(null);
	};

	const onClearSearchTerm = () => {
		const newLocation = createProjectsPageUrl(PROJECTS_PAGE_URL, filter);

		navigate(newLocation);

		setSearchTerm('');
	};

	const projects = filterProjects(projectsData, filter, searchTerm);

	return (
		<div className="projects" id="container">
			<div
				className={classnames('projects-container', {
					grid,
					list: !grid,
				})}
			>
				<h1>Projects</h1>

				<Finder
					filter={filter}
					filterList={filterList}
					filterTerm={filterTerm}
					grid={grid}
					onClearFilter={onClearFilter}
					onClearSearchTerm={onClearSearchTerm}
					projectsLength={projects.length}
					searchTerm={searchTerm}
					setFilter={setFilter}
					setFilterTerm={setFilterTerm}
					setGrid={setGrid}
					setSearchTerm={setSearchTerm}
				/>
				<Projects grid={grid} projectLink={projectLink} projects={projects} />

				<NoResults
					filter={filter}
					isVisible={projects.length === 0}
					onClearFilter={onClearFilter}
					onClearSearchTerm={onClearSearchTerm}
					searchTerm={searchTerm}
				/>
			</div>
		</div>
	);
};

type ProjectGalleryProps = {
	filterList: (keyof TechKeys)[];
	projectLink: string;
	projectsData: ProjectType[];
};
