import React, { useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import classnames from "classnames";

import { filterProjects, createProjectsPageUrl } from "./ProjectsPage.helpers";
import NoResults from "./NoResults/NoResults";
import Projects from "./Projects/Projects";
import SearchForm from "./SearchForm/SearchForm";
import ViewControl from "./ViewControl/ViewControl";
import { PROJECTS_DATA } from "./ProjectsPage.data";
import Filter from "./Filter/Filter";

const PROJECTS_PAGE_URL = "/projects";

const ProjectsPage = ({ history }) => {
  const { paramFilter, paramSearch } = useParams();

  let initialFilter = null;

  if (paramFilter) {
    initialFilter =
      paramFilter === "all" || paramFilter === "null" ? null : paramFilter;
  }

  const initialSearch = paramSearch || "";

  const [filter, setFilter] = useState(initialFilter || null);
  const [filterTerm, setFilterTerm] = useState(initialFilter || null);
  const [grid, setGrid] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(initialSearch);

  const toggleView = () => {
    setGrid(!grid);
  };

  const onSelectFilter = (filterProp) => {
    const newFilter = filter === filterProp ? null : filterProp;
    const newLocation = createProjectsPageUrl(
      PROJECTS_PAGE_URL,
      newFilter,
      searchTerm
    );

    history.push(newLocation);

    setFilter(newFilter);
    setFilterTerm(newFilter);
  };

  const onChangeSearch = (e) => {
    const newSearchTerm = e.currentTarget.value;

    const newLocation = createProjectsPageUrl(
      PROJECTS_PAGE_URL,
      filter,
      newSearchTerm
    );

    history.push(newLocation);

    setSearchTerm(newSearchTerm);
  };

  const onClearFilter = () => {
    const newLocation = createProjectsPageUrl(PROJECTS_PAGE_URL);

    history.push(newLocation);

    setFilter(null);
    setFilterTerm(null);
  };

  const onClearSearchTerm = () => {
    const newLocation = createProjectsPageUrl(PROJECTS_PAGE_URL, filter);

    history.push(newLocation);

    setSearchTerm("");
  };

  const onChangeFilter = (e) => {
    const newFilter = e.target.value;
    const newLocation = createProjectsPageUrl(PROJECTS_PAGE_URL, newFilter);

    history.push(newLocation);

    setFilterTerm(newFilter);
  };

  const toggleOpenFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const onClearAndCloseFilter = () => {
    onClearFilter();
    toggleOpenFilter();
  };

  const projects = filterProjects(PROJECTS_DATA, filter, searchTerm);
  const showResultsCount = (filter || searchTerm) && projects.length > 0;

  return (
    <div id="container" className="projects">
      <div
        className={classnames("projects-container", {
          grid,
          list: !grid,
        })}
      >
        <h1>Projects</h1>

        <div className="find-section">
          <p className="center">
            Click on the icons below to filter my work by different technologies
          </p>

          <Filter
            filter={filter}
            filterTerm={filterTerm}
            isFilterOpen={isFilterOpen}
            onChangeFilter={onChangeFilter}
            onClearAndCloseFilter={onClearAndCloseFilter}
            onSelectFilter={onSelectFilter}
            toggleOpenFilter={toggleOpenFilter}
          />

          <div className="clearfix" />

          <SearchForm
            onChangeSearch={onChangeSearch}
            onClearSearchTerm={onClearSearchTerm}
            searchTerm={searchTerm}
          />

          {showResultsCount && (
            <p className="results-count">Results: {projects.length}</p>
          )}

          <ViewControl
            grid={grid}
            isVisible={projects.length > 0}
            toggleView={toggleView}
          />
        </div>

        <Projects projects={projects} grid={grid} />

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
  history: PropTypes.object,
};

export default ProjectsPage;
