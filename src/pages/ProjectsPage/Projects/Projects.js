import React from "react";
import PropTypes from "prop-types";

import { getResultsCountClass } from "./Projects.helpers";
import ProjectItemList from "../ProjectItemList/ProjectItemList";
import ProjectItemGrid from "../ProjectItemGrid/ProjectItemGrid";

const Projects = ({ grid, projects }) => {
  if (projects.length === 0) return null;

  const resultsCountClass = getResultsCountClass(projects.length);

  return (
    <ul className={`projects ${resultsCountClass}`}>
      {projects.map((project, index) => (
        <li key={index} className="project">
          {grid ? (
            <ProjectItemGrid {...project} />
          ) : (
            <ProjectItemList {...project} />
          )}
        </li>
      ))}
    </ul>
  );
};

Projects.propTypes = {
  grid: PropTypes.bool,
  projects: PropTypes.array,
};

Projects.defaultProps = {
  grid: false,
  projects: [],
};

export default Projects;
