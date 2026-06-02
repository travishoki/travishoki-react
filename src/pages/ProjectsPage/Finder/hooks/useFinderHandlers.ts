import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { TechFilterType } from '~const/Tech.const';

import { createProjectsPageUrl } from '../../ProjectsPage.helpers';

const PROJECTS_PAGE_URL = '/projects';

type UseFinderHandlersProps = {
	filter: TechFilterType;
	onClearFilter: () => void;
	searchTerm: string;
	setFilter: (filter: TechFilterType) => void;
	setFilterTerm: (filterTerm: TechFilterType) => void;
	setSearchTerm: (searchTerm: string) => void;
};

export const useFinderHandlers = ({
	filter,
	onClearFilter,
	searchTerm,
	setFilter,
	setFilterTerm,
	setSearchTerm,
}: UseFinderHandlersProps) => {
	const navigate = useNavigate();

	const [isFilterOpen, setIsFilterOpen] = useState(false);

	const toggleOpenFilter = () => {
		setIsFilterOpen(!isFilterOpen);
	};

	const onSelectFilter = (filterProp: TechFilterType) => {
		const newFilter = filter === filterProp ? null : filterProp;
		const newLocation = createProjectsPageUrl(
			PROJECTS_PAGE_URL,
			newFilter,
			searchTerm,
		);

		navigate(newLocation);

		setFilter(newFilter);
		setFilterTerm(newFilter);
	};

	const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newSearchTerm = e.currentTarget.value;
		const newLocation = createProjectsPageUrl(
			PROJECTS_PAGE_URL,
			filter,
			newSearchTerm,
		);

		navigate(newLocation);

		setSearchTerm(newSearchTerm);
	};

	const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newFilter = e.target.value as TechFilterType;
		const newLocation = createProjectsPageUrl(PROJECTS_PAGE_URL, newFilter);

		navigate(newLocation);

		setFilterTerm(newFilter);
	};

	const onClearAndCloseFilter = () => {
		onClearFilter();
		toggleOpenFilter();
	};

	return {
		isFilterOpen,
		onChangeFilter,
		onChangeSearch,
		onClearAndCloseFilter,
		onSelectFilter,
		toggleOpenFilter,
	};
};
