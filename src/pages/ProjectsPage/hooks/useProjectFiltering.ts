import { useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { TECH, TechFilterType } from '~const/Tech.const';

import { PROJECTS_DATA } from '../ProjectsPage.data';
import { createProjectsPageUrl, filterProjects } from '../ProjectsPage.helpers';

const PROJECTS_PAGE_URL = '/projects';

export const useProjectFiltering = () => {
	const { paramFilter, paramSearch } = useParams();
	const navigate = useNavigate();

	let initialFilter: TechFilterType = null;

	// Only treat the URL param as a filter when it's an actual tech key —
	// otherwise a stray value (e.g. a search term in the filter slot) would set
	// filter to something not in TECH and crash CurrentFilter.
	if (paramFilter && paramFilter in TECH) {
		initialFilter = paramFilter as TechFilterType;
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

	const projects = filterProjects(PROJECTS_DATA, filter, searchTerm);

	return {
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
	};
};
