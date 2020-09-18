import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { filterProjects } from './ProjectsPage.helpers';
import NoResults from './NoResults/NoResults';
import Projects from './Projects/Projects';
import ViewControl from './ViewControl/ViewControl';
import { filterList, ProjectsData } from './ProjectsPage.data';
import TechIcon from './TechIcon/TechIcon';
import FilterItem from './Filter/FilterItem';

const ProjectsPage = ({
	params,
}) => {
	const { paramFilter, paramSearch } = useParams();

	let initialFilter = null;

	if (params) {
		initialFilter = (paramFilter === 'all') ? null : paramFilter;
	}

	const initialSearch = paramSearch || '';

	const [ filter, setFilter ] = useState(initialFilter || null);
	const [ filterTerm, setFilterTerm ] = useState(initialFilter || null);
	const [ grid, setGrid ] = useState(true);
	const [ isFilterOpen, setIsFilterOpen ] = useState(false);
	const [ searchTerm, setSearchTerm ] = useState(initialSearch);

    const toggleView = () => {
        setGrid(!grid);
    };

    const onSelectFilter = (filterProp) => {
		const newFilter = (filter === filterProp) ? null : filterProp;

		setFilter(newFilter);
		setFilterTerm(newFilter);
    };

    const onChangeSearch = (e) => {
        setSearchTerm(e.currentTarget.value);
    };

    const onClearFilter = () => {
		setFilter(null);
		setFilterTerm(null);
    };

    const onClearSearchTerm = () => {
        setSearchTerm('');
    };

    const onChangeFilter = (e) => {
		setFilterTerm(e.target.value);
    };

    const toggleOpenFilter = () => {
		setIsFilterOpen(!isFilterOpen);
    };

    const onClearAndCloseFilter = () => {
        onClearFilter();
        toggleOpenFilter();
    };

    const projects = filterProjects(
		ProjectsData,
		filter,
		searchTerm
	);
    const showResultsCount = (filter || searchTerm) && projects.length > 0;
    const filterListFiltered = filterList.filter((item) => {
        return filterTerm === null || item.toLowerCase().indexOf(filterTerm.toLowerCase()) > -1;
    });

    return (
        <div id="container" className="projects">
            <div className={`projects-container ${(grid ? 'grid' : 'list')}`}>
                <h1>Projects</h1>

                <div className="filter-section">
                    <p className="center">Click on the icons below to filter my work by different technologies</p>

                    {filter ? (
                        <div className="tech-icon-item">
                            <TechIcon name={filter} />
                            <p>{filter}</p>
                            <i
								className="fa fa-close pointer f-right"
								onClick={onClearAndCloseFilter}
							/>
                        </div>
                    ):(
                        <Fragment>
                            {isFilterOpen ? (
                                <Fragment>
                                    <form>
                                        <input
                                            type="text"
                                            className="form-control"
                                            maxLength="25"
                                            placeholder="Tech Filter"
                                            value={filterTerm || ''}
                                            onChange={onChangeFilter}
                                        />
                                    </form>
                                    {filterListFiltered.length > 0 ? (
                                        <ul className="tech-icon-list filters">
                                            {!filterTerm && (
                                                <li
                                                    onClick={onClearAndCloseFilter}
                                                    className="filter-item tech-icon-item"
                                                >
                                                    <p>All</p>
                                                </li>
                                            )}

                                            {filterListFiltered.map((item, index) => (
                                                <FilterItem
                                                    key={index}
                                                    item={item}
                                                    filter={filter}
                                                    onSelectFilter={onSelectFilter}
                                                />
                                            ))}
                                        </ul>
                                    ):(
                                        <p className="center">No Results</p>
                                    )}
                                </Fragment>
                            ) : (
                                <div
									onClick={toggleOpenFilter}
									className="filter-item pointer"
								>
                                    <p className="f-left">Filter by Tech</p>
                                    <i className="fa fa-chevron-down f-right"/>
                                </div>
                            )}
                        </Fragment>
                    )}

                    <div className="clearfix" />

                    <form>
                        <div
                            id="input-holder"
                            className={searchTerm ? 'hasSearchTerm' : ''}
                        >
                            <input
                                type="text"
                                className="form-control"
                                maxLength="25"
                                placeholder="Search Term"
                                value={searchTerm || ''}
                                onChange={onChangeSearch}
                            />
                            {searchTerm && (
                                <i className="fa fa-close" onClick={onClearSearchTerm} />
                            )}
                        </div>
                    </form>

                    {showResultsCount && (
                        <p className="results-count">Results: {projects.length}</p>
                    )}

					<ViewControl
						grid={grid}
						isVisible={projects.length > 0}
						toggleView={toggleView}
					/>
                </div>

				<Projects
					projects={projects}
					grid={grid}
				/>

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

ProjectsPage.propTypes = {
    params: PropTypes.object
};

export default ProjectsPage;
