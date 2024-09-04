import React from "react";
import PropTypes from "prop-types";

import TechIcon from "~components/TechIcon/TechIcon";

const CurrentFilter = ({ filter, onClearAndCloseFilter }) => {
  if (!filter) return null;

  return (
    <div className="current-filter tech-icon-item">
      <TechIcon name={filter} />
      <p>{filter}</p>
      <i
        className="fa fa-close pointer f-right"
        onClick={onClearAndCloseFilter}
      />
    </div>
  );
};

CurrentFilter.propTypes = {
  filter: PropTypes.string,
  onClearAndCloseFilter: PropTypes.func,
};

export default CurrentFilter;
