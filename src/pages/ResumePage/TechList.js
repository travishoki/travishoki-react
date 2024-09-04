import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import TechIcon from "~components/TechIcon/TechIcon";

const TechList = ({ techs }) => {
  return (
    <ul className="tech-icon-list-horizontal">
      {techs.map((tech, index) => (
        <li key={index} className="tech-icon-item">
          <Link title={tech} to={`/projects/${tech}`}>
            <TechIcon name={tech} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

TechList.propTypes = {
  techs: PropTypes.array,
};

export default TechList;
